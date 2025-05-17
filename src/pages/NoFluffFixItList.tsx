
import React, { useState } from 'react';
import { BarChart3, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CertificationLogos from '../components/home/CertificationLogos';
import MetaHead from '../components/MetaHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  businessName: z.string().min(2, { message: "Business name is required" }),
  websiteUrl: z.string().url({ message: "Please enter a valid URL" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  websiteWorry: z.string().optional(),
});

const NoFluffFixItList = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      websiteUrl: "",
      email: "",
      websiteWorry: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // For demo purposes, we'll simulate a submission delay
    setTimeout(() => {
      console.log("Form submitted with values:", values);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
    
    // In a real implementation, you would send the data to your backend
    // const response = await fetch('/api/submit-application', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values),
    // });
  };

  const steps = [
    {
      title: "Apply Below",
      description: "We'll review your site (just need your URL and a few quick details)."
    },
    {
      title: "Get Your Fix-It List",
      description: "A plain-English, priority action list to improve your site."
    },
    {
      title: "Next Steps? Up to You.",
      description: "You'll get a quote if you want us to fix it for you."
    }
  ];

  const includedItems = [
    "A Priority Fix-It List covering:",
    "Site Speed",
    "SEO Visibility",
    "User Experience",
    "Conversion Roadblocks",
    "Your Shine Score — a quick-read performance rating",
    "A Short Loom Video or Call to explain the findings"
  ];

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="No-Fluff Fix-It List | Marzipan Digital" 
        description="Get your free website health check - a practical action plan to improve your site's speed, SEO, and conversions."
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-brandBlue/10 via-white to-marzipan/20 dark:from-brandBlue/30 dark:via-gray-900 dark:to-marzipan/10">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight text-gray-800 dark:text-white">
                  Is Your Website Holding You Back?
                </h1>
                <h2 className="text-2xl md:text-3xl font-display text-brandBlue dark:text-brandBlue/90">
                  Get your No-Fluff Fix-It List — normally $499, yours free this month.
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-200 max-w-xl">
                  We'll audit your site and show you exactly what to fix to improve your speed, SEO, and conversions — no tech speak, no fluff, no pressure.
                </p>
                <Button 
                  size="lg" 
                  className="bg-brandBlue hover:bg-brandBlue/90 text-white font-medium text-lg px-8 py-6"
                  onClick={scrollToForm}
                >
                  Claim My Free Website Health Check <ArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="relative mt-6 lg:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 relative z-10">
                  <div className="absolute top-0 right-0 bg-brandBlue text-white px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-medium">
                    Free This Month
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4 dark:text-white">No-Fluff Fix-It List</h3>
                  <div className="space-y-3">
                    {includedItems.slice(0, 5).map((item, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="text-brandBlue dark:text-brandBlue/90 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                        <span className="dark:text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                    <span className="text-lg font-semibold dark:text-white">Normally: <span className="line-through text-gray-500 dark:text-gray-400">$499</span></span>
                    <div className="text-2xl font-bold text-brandBlue dark:text-brandBlue/90 mt-1">FREE</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Limited to 5 spots this month</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-marzipan/40 dark:bg-marzipan/20 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800">
                  <CardContent className="p-6 text-center">
                    <div className="bg-brandBlue/10 dark:bg-brandBlue/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-brandBlue dark:text-brandBlue/90">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2 dark:text-white">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* What's Included */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white">What's Included</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                {includedItems.map((item, index) => (
                  <div key={index} className={`flex items-center ${index === 0 ? 'font-semibold text-lg dark:text-white' : 'dark:text-gray-200'}`}>
                    {index > 0 && <Check className="text-brandBlue dark:text-brandBlue/90 mr-2 h-5 w-5 flex-shrink-0" />}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BarChart3 className="text-brandBlue dark:text-brandBlue/90 h-6 w-6 mr-3" />
                  <h3 className="text-xl font-display font-semibold dark:text-white">Your Shine Score</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Every site gets a "Shine Score" from 1-10 across key areas:
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium dark:text-gray-200">Speed</span>
                      <span className="text-sm font-medium dark:text-gray-200">7/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div className="bg-brandBlue dark:bg-brandBlue/90 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium dark:text-gray-200">SEO</span>
                      <span className="text-sm font-medium dark:text-gray-200">5/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div className="bg-brandBlue dark:bg-brandBlue/90 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium dark:text-gray-200">User Experience</span>
                      <span className="text-sm font-medium dark:text-gray-200">8/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div className="bg-brandBlue dark:bg-brandBlue/90 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium dark:text-gray-200">Conversion Potential</span>
                      <span className="text-sm font-medium dark:text-gray-200">6/10</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div className="bg-brandBlue dark:bg-brandBlue/90 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  (This is just an example - your actual scores will be in your Fix-It List)
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why It's Free */}
        <section className="py-16 bg-brandBlue/10 dark:bg-brandBlue/20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-800 dark:text-white">Why It's Free (For Now)</h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                We usually charge $499 for this service, but we're opening 5 free spots this month to introduce more businesses to how we help them shine brighter online.
              </p>
              <p className="text-lg font-medium text-gray-800 dark:text-white">
                No strings. No spam. No pressure.
              </p>
            </div>
          </div>
        </section>
        
        {/* What Happens Next */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white">What Happens Next</h2>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                Once you apply, you'll hear back within 2 business days confirming if you've claimed one of the free spots.
              </p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-brandBlue to-brandBlue/80 text-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to see what's holding your site back?
              </h2>
              <p className="text-xl mb-8">
                Claim your free No-Fluff Fix-It List now.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-marzipan hover:bg-marzipan/90 text-brandBlue font-medium text-lg px-8 py-6"
                onClick={scrollToForm}
              >
                Claim My Free Health Check <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section id="application-form" className="py-16 bg-white dark:bg-gray-800 scroll-mt-16">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white">Apply For Your Free Fix-It List</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Fill out the form below to apply for one of our 5 free spots this month.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-display font-semibold mb-4 dark:text-white">Application Received!</h3>
                  <p className="mb-4 dark:text-gray-200">
                    Thank you for applying. We'll review your website and get back to you within 2 business days to let you know if you've secured one of our free spots.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Keep an eye on your inbox for our email.
                  </p>
                </div>
              ) : (
                <Card className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="dark:text-white">Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                              </FormControl>
                              <FormMessage className="dark:text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="dark:text-white">Business Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your business name" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                              </FormControl>
                              <FormMessage className="dark:text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="websiteUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="dark:text-white">Website URL</FormLabel>
                              <FormControl>
                                <Input placeholder="https://your-website.com" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                              </FormControl>
                              <FormMessage className="dark:text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="dark:text-white">Best Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your-email@example.com" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                              </FormControl>
                              <FormMessage className="dark:text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="websiteWorry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="dark:text-white">What's your biggest website worry? (optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us what concerns you most about your current website..."
                                  className="min-h-[100px] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="dark:text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-brandBlue hover:bg-brandBlue/90"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit My Application"}
                        </Button>
                        
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                          We respect your privacy and will never share your information with third parties.
                        </p>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
        
        {/* Trust Indicators */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-xl font-display font-medium mb-6 dark:text-white">Trusted by Purpose-Driven Brands</h2>
            </div>
            <CertificationLogos />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NoFluffFixItList;
