
import React from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

// Schema for form validation
const formSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL including http:// or https://" }),
  email: z.string().email({ message: "Please enter a valid email address" }).optional(),
  adminEmail: z.string().email({ message: "Please enter a valid admin email address" }).optional(),
});

interface CarbonFormProps {
  isLoading: boolean;
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
}

const CarbonForm: React.FC<CarbonFormProps> = ({ isLoading, onSubmit }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      email: "",
      adminEmail: "", // Optional admin email to receive a copy
    },
  });

  return (
    <Card className="max-w-2xl mx-auto mt-10 border border-marzipan/30 shadow-sm animate-fade-in dark:border-gray-700 dark:bg-gray-800" style={{ animationDelay: "0.2s" }}>
      <CardHeader>
        <CardTitle className="text-xl dark:text-white">Check your website's carbon footprint</CardTitle>
        <CardDescription className="dark:text-gray-400">
          Enter a URL to analyze its environmental impact
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Website URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} className="dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Email (optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      {...field} 
                      type="email" 
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </FormControl>
                  <p className="text-xs text-muted-foreground mt-1 dark:text-gray-400">
                    Get a copy of the results and sustainable web tips
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="adminEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Admin Email (optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="admin@your-company.com" 
                      {...field} 
                      type="email" 
                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </FormControl>
                  <p className="text-xs text-muted-foreground mt-1 dark:text-gray-400">
                    Receive a copy of all submissions
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-brandBlue hover:bg-brandBlue/90 dark:bg-brandBlue dark:hover:bg-brandBlue/90" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : "Check Carbon Footprint"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CarbonForm;
