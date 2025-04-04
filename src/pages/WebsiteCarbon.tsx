
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Check, AlertTriangle, Leaf, FileText, Wind } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "sonner";

// Schema for form validation
const formSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL including http:// or https://" }),
  email: z.string().email({ message: "Please enter a valid email address" }).optional(),
});

type CarbonResult = {
  url: string;
  green: boolean;
  bytes: number;
  cleanerThan: number;
  statistics: {
    adjustedBytes: number;
    energy: number;
    co2: {
      grid: {
        grams: number;
        litres: number;
      },
      renewable: {
        grams: number;
        litres: number;
      }
    }
  };
  timestamp: number;
} | null;

const WebsiteCarbon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CarbonResult>(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch(`https://api.websitecarbon.com/site?url=${encodeURIComponent(values.url)}`);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);

      // Store email if provided
      if (values.email) {
        // In a real application, you would save this to a database
        console.log("Email submitted:", values.email);
        setEmailSubmitted(true);
        toast.success("We'll send you more sustainability tips!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Unable to check this website. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Format bytes to KB/MB
  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
                Free Tool
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Website Carbon Footprint Checker
              </h1>
              <p className="text-lg text-foreground/80 mb-6">
                Check the environmental impact of your website and discover how you can make it more sustainable.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto mt-10 border border-marzipan/30 shadow-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-xl">Check your website's carbon footprint</CardTitle>
                <CardDescription>
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
                          <FormLabel>Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com" {...field} />
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
                          <FormLabel>Email (optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              {...field} 
                              type="email" 
                            />
                          </FormControl>
                          <p className="text-xs text-muted-foreground mt-1">
                            Get a copy of the results and sustainable web tips
                          </p>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full" 
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
            
            {result && (
              <Card className="max-w-2xl mx-auto mt-8 border border-marzipan/30 shadow-sm animate-scale-up">
                <CardHeader className={result.green ? "bg-green-50/50" : "bg-yellow-50/50"}>
                  <div className="flex items-center gap-3">
                    {result.green ? (
                      <div className="bg-green-100 p-2 rounded-full">
                        <Leaf className="h-6 w-6 text-green-600" />
                      </div>
                    ) : (
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <AlertTriangle className="h-6 w-6 text-yellow-600" />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-xl">
                        {result.url.replace(/^https?:\/\//, '')}
                      </CardTitle>
                      <CardDescription>
                        {result.green 
                          ? "This website is hosted green!" 
                          : "This website is not hosted on renewable energy"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-brandBlue/10 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-brandBlue" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Page Size</p>
                        <p className="font-medium">{formatBytes(result.bytes)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-brandBlue/10 p-2 rounded-full">
                        <Wind className="h-5 w-5 text-brandBlue" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Carbon Emission</p>
                        <p className="font-medium">{result.statistics.co2.grid.grams.toFixed(2)}g of CO2</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-muted-foreground mb-2">Cleaner than {result.cleanerThan}% of pages tested</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-brandBlue h-2.5 rounded-full" 
                        style={{ width: `${result.cleanerThan}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-marzipan/20 rounded-lg border border-marzipan/30">
                    <h3 className="font-medium mb-2">What does this mean?</h3>
                    <p className="text-sm text-foreground/80">
                      {result.green 
                        ? `This site is hosted on renewable energy, which is great! However, it could still be optimized further to reduce its ${result.statistics.co2.grid.grams.toFixed(2)}g carbon footprint per page view.`
                        : `This site produces ${result.statistics.co2.grid.grams.toFixed(2)}g of CO2 per page view. Switching to green hosting and optimizing page size could significantly reduce its carbon footprint.`
                      }
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch space-y-4 border-t pt-6">
                  <div className="text-center">
                    <h3 className="font-medium mb-2">Want to make your website more sustainable?</h3>
                    <p className="text-sm text-foreground/80 mb-4">
                      Our sustainable web design services can help reduce your website's carbon footprint while improving user experience.
                    </p>
                    <Button asChild variant="default" className="w-full sm:w-auto">
                      <a href="/contact">Get in touch</a>
                    </Button>
                  </div>
                  
                  {!emailSubmitted && !form.getValues("email") && (
                    <div className="pt-4 border-t">
                      <p className="text-sm text-center mb-3">Subscribe to receive sustainable web design tips</p>
                      <form 
                        className="flex flex-col sm:flex-row gap-3"
                        onSubmit={(e) => {
                          e.preventDefault();
                          const email = (e.target as HTMLFormElement).email.value;
                          if (email && email.includes('@')) {
                            // In a real app, you would save this to your database
                            console.log("Newsletter signup:", email);
                            setEmailSubmitted(true);
                            toast.success("Thank you for subscribing!");
                          } else {
                            toast.error("Please enter a valid email address");
                          }
                        }}
                      >
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          className="flex-grow" 
                        />
                        <Button type="submit">Subscribe</Button>
                      </form>
                    </div>
                  )}
                </CardFooter>
              </Card>
            )}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-center">Why Website Carbon Footprint Matters</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-marzipan/20 p-6 rounded-lg border border-marzipan/30">
                  <h3 className="font-display font-medium text-xl mb-3">Environmental Impact</h3>
                  <p className="text-foreground/80">
                    The internet produces approximately 3.7% of global carbon emissions, similar to the airline industry. Each website contributes to this through data transfer, server energy, and device power consumption.
                  </p>
                </div>
                
                <div className="bg-marzipan/20 p-6 rounded-lg border border-marzipan/30">
                  <h3 className="font-display font-medium text-xl mb-3">Business Benefits</h3>
                  <p className="text-foreground/80">
                    Sustainable websites are typically faster, more efficient, and provide better user experiences. This can lead to higher conversion rates, improved SEO rankings, and better brand perception.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-xl font-display font-medium mb-4">Ready to make your website more sustainable?</h3>
                <Button asChild size="lg" className="mt-2">
                  <a href="/services/sustainable-web-design">Learn about our sustainable web design services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebsiteCarbon;
