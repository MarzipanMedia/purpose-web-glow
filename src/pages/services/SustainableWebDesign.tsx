
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Check, Zap, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const SustainableWebDesign = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Form submission logic would go here
  };

  const clientLogos = [
    { name: 'EcoLiving Collective', initial: 'E' },
    { name: 'Sustainable Solutions Co.', initial: 'S' },
    { name: 'Green Growth Partners', initial: 'G' },
    { name: 'Terra Friendly', initial: 'T' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
                  Eco-Friendly Web Solutions
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Sustainable Web Design for Purpose-Driven Brands
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  Beautiful, eco-friendly websites that minimize environmental impact while maximizing user experience and conversion rates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="#contact" className="btn-primary flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/projects" className="btn-secondary flex items-center gap-2">
                    View Our Work <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-brandBlue rounded-lg p-8 text-white">
                  <div className="flex items-center mb-6">
                    <Globe className="h-10 w-10 mr-4" />
                    <h2 className="text-2xl font-display">Why Choose Sustainable Web Design?</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>90% reduction in carbon emissions compared to average websites</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Up to 2x faster page load speeds improving SEO and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Aligned with your brand's environmental values and commitments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Enhanced performance on all devices for better user engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Our Sustainable Design Approach
              </h2>
              <p className="text-foreground/80">
                We combine aesthetic excellence with environmental responsibility to create stunning, efficient websites.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Energy-Efficient Code</h3>
                  <p className="text-foreground/70">
                    Streamlined, efficient code that reduces server loads and minimizes power consumption while ensuring optimal performance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Green Hosting</h3>
                  <p className="text-foreground/70">
                    Recommendations for renewable-powered hosting options that align with your sustainability commitments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Carbon Footprint Tracking</h3>
                  <p className="text-foreground/70">
                    Monitor and optimize your website's environmental impact with our specialized tracking tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-marzipan/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-semibold">
                  Our Sustainable Design Process
                </h2>
                <p className="text-lg text-foreground/80">
                  Every website we build follows our proven methodology for creating beautiful, efficient, and eco-friendly digital experiences.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">1</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Discovery & Strategy</h4>
                      <p className="text-foreground/70">Understanding your brand values, goals, and target audience to create a tailored strategy.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">2</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Sustainable Design</h4>
                      <p className="text-foreground/70">Creating eco-friendly wireframes and designs that minimize resource usage while maximizing impact.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">3</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Efficient Development</h4>
                      <p className="text-foreground/70">Building your site with clean code and optimized assets to reduce energy consumption.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">4</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Testing & Optimization</h4>
                      <p className="text-foreground/70">Rigorous performance and emissions testing to ensure optimal efficiency and user experience.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-secondary/40 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                    Sustainable Website Health Check
                  </h3>
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      We offer free website sustainability audits to help you understand your current environmental impact.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Page speed analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Carbon footprint measurement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>User experience assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Sustainability recommendations</span>
                      </div>
                    </div>
                    <Link 
                      to="#contact" 
                      className="btn-primary w-full justify-center"
                    >
                      Get Your Free Audit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Logos Section */}
        <section className="py-14 bg-white">
          <div className="container-custom">
            <div className="text-center mb-10 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                Trusted By Purpose-Driven Brands
              </h2>
              <p className="text-foreground/70">
                Join these forward-thinking organizations who've chosen our sustainable approach
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clientLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-6 rounded-lg border border-marzipan/30 bg-marzipan/5 animate-fade-in hover:bg-marzipan/20 transition-all duration-300"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="h-16 w-16 rounded-full bg-brandBlue/10 flex items-center justify-center text-2xl font-display text-brandBlue font-semibold mb-3">
                    {client.initial}
                  </div>
                  <p className="text-center font-medium">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA and Contact Form Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-brandBlue to-brandBlue/80 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-semibold">
                  Ready to create a sustainable digital presence?
                </h2>
                <p className="text-xl text-white/90">
                  Get in touch to discuss how we can help your purpose-driven brand thrive online while supporting a more sustainable internet.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
                  <h3 className="text-2xl font-display mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Specialized in sustainable web design principles</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Proven track record with purpose-driven brands</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Measurable reduction in digital carbon footprint</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Focus on both sustainability AND performance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white text-foreground rounded-lg p-6 shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-display font-semibold mb-6 text-center">
                  Let's Start the Conversation
                </h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                placeholder="John"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                placeholder="Doe"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company/Organization</FormLabel>
                          <FormControl>
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              placeholder="Your Organization"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project needs..."
                              className="resize-none min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-brandBlue hover:bg-brandBlue/90">
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      Your information will never be shared with third parties.
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SustainableWebDesign;
