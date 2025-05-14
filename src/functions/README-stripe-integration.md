
# Stripe Integration Guide

This document outlines the steps to complete the Stripe integration for the Link in Bio ebook sales.

## Required Edge Functions

To fully implement the Stripe checkout, you'll need to create these Supabase Edge Functions:

1. `create-checkout`: Creates a Stripe checkout session for an ebook purchase
2. `verify-purchase`: Verifies if a purchase was completed and updates the database

## Implementation Steps

### 1. Connect to Supabase and Set Up Stripe

1. Click the green Supabase button to connect your Lovable project to Supabase
2. Set up the following secrets in your Supabase dashboard:
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `STRIPE_WEBHOOK_SECRET`: For webhook verification (optional)

### 2. Create Database Tables

Create a table to store ebook purchases:

```sql
CREATE TABLE public.ebook_purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  ebook_id TEXT NOT NULL,
  purchase_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  stripe_checkout_id TEXT,
  stripe_payment_id TEXT,
  amount INTEGER NOT NULL,
  status TEXT DEFAULT 'pending' 
);

-- Set up RLS policies
ALTER TABLE public.ebook_purchases ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own purchases
CREATE POLICY "Users can view own purchases" ON public.ebook_purchases
  FOR SELECT USING (auth.uid() = user_id);
```

### 3. Create the Edge Functions

#### create-checkout.ts

```typescript
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { ebook } = await req.json();
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: ebook.title,
              description: ebook.description,
              images: ebook.image ? [ebook.image] : undefined,
            },
            unit_amount: Math.round(ebook.price * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/link?success=true&ebookId=${ebook.id}`,
      cancel_url: `${req.headers.get("origin")}/link?canceled=true`,
    });

    // Store session info in database
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL"),
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),
      { auth: { persistSession: false } }
    );

    // Get user from auth header
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "");
    let userId = null;
    
    if (token) {
      const { data: userData } = await supabaseAdmin.auth.getUser(token);
      if (userData?.user) {
        userId = userData.user.id;
      }
    }

    // Create purchase record
    await supabaseAdmin.from("ebook_purchases").insert({
      user_id: userId,
      ebook_id: ebook.id,
      stripe_checkout_id: session.id,
      amount: Math.round(ebook.price * 100),
      status: "pending",
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
```

### 4. Client-Side Implementation

Update the `stripeService.ts` file to call these edge functions:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const createCheckoutSession = async (ebook) => {
  const { data, error } = await supabase.functions.invoke('create-checkout', {
    body: { ebook }
  });
  
  if (error) throw new Error(error.message);
  return data;
};

export const getPurchasedEbooks = async () => {
  const { data, error } = await supabase
    .from('ebook_purchases')
    .select('*')
    .eq('status', 'completed');
    
  if (error) throw new Error(error.message);
  return data;
};
```

## Final Steps

1. Deploy the edge functions to Supabase
2. Update the EbookSection component to use the real Stripe service
3. Add a purchases page to allow users to access their purchased ebooks

This completes the basic integration. For a more robust solution, consider adding webhook support to automatically update purchase status.
