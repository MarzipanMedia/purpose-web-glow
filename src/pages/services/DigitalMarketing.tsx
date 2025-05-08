import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Check, Megaphone, Share2, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import ServiceClientLogos from '../../components/services/ServiceClientLogos';

const DigitalMarketing = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Form submission logic would go here
  };

  const clientLogos = [
    { name: 'Sustainable Solutions Co.', initial: 'S' },
    { name: 'EcoLiving Collective', initial: 'E' },
    { name: 'Green Growth Partners', initial: 'G' },
    { name: 'Ocean Initiative', initial: 'O' },
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
                  Social & AdWords
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Strategic Digital Marketing That Makes a Difference
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  Purpose-driven digital marketing strategies that amplify your message and connect with the right audience across social media and search platforms.
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
                <div className="bg-gradient-to-br from-brandBlue to-brandBlue/70 rounded-lg p-8 text-white">
                  <div className="flex items-center mb-6">
                    <Megaphone className="h-10 w-10 mr-4" />
                    <h2 className="text-2xl font-display">Why Choose Our Marketing?</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Values-aligned campaigns that resonate with conscious consumers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Data-driven strategies with measurable ROI</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Integrated approach across social and search platforms</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Ethical marketing practices that build authentic connections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Our Digital Marketing Services
              </h2>
              <p className="text-foreground/80">
                Comprehensive digital marketing solutions designed to amplify your purpose-driven brand's message and impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Social Media Marketing</h3>
                  <p className="text-foreground/70">
                    Strategic content creation and community management across platforms to build meaningful connections with your audience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Google Ads & PPC</h3>
                  <p className="text-foreground/70">
                    Targeted pay-per-click campaigns that maximise your budget and connect with users actively searching for your solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Analytics & Optimisation</h3>
                  <p className="text-foreground/70">
                    Comprehensive tracking and continuous refinement to ensure your campaigns deliver measurable impact and ROI.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Marketing Approaches Section */}
        <section className="py-16 bg-marzipan/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-semibold">
                  Our Digital Marketing Approach
                </h2>
                <p className="text-lg text-foreground/80">
                  We combine data-driven strategies with purpose-led messaging to create campaigns that resonate and convert.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">1</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Discovery & Strategy</h4>
                      <p className="text-foreground/70">Understanding your goals, audience, and values to create a tailored marketing plan.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">2</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Campaign Design</h4>
                      <p className="text-foreground/70">Developing creative, purpose-aligned campaigns that speak authentically to your audience.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">3</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Implementation</h4>
                      <p className="text-foreground/70">Executing campaigns with precision targeting and continuous monitoring.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">4</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Analysis & Optimisation</h4>
                      <p className="text-foreground/70">Data-driven refinement to maximise performance and impact over time.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-secondary/40 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                    Free Marketing Audit
                  </h3>
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      Get a complimentary audit of your current digital marketing efforts and discover opportunities for growth.
                    </p>
                    
                    <div className="space-y-4 mb-10">
                      {[
                        "Social media performance review",
                        "Google Ads account assessment", 
                        "Competitor benchmarking",
                        "Action plan with 3 key recommendations"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        asChild
                        className="w-full bg-brandBlue hover:bg-brandBlue/90 text-white py-6"
                      >
                        <Link to="#contact">
                          Request Your Free Audit
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Results You Can Measure
              </h2>
              <p className="text-foreground/80">
                Our digital marketing campaigns deliver meaningful metrics that impact your bottom line
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-brandBlue/10 to-brandBlue/5 p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-brandBlue" />
                <div className="text-3xl font-display font-bold mb-2">300%+</div>
                <p className="text-foreground/70">Average ROAS for Our Google Ad Campaigns</p>
              </div>
              
              <div className="bg-gradient-to-br from-brandBlue/10 to-brandBlue/5 p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-brandBlue" />
                <div className="text-3xl font-display font-bold mb-2">85%+</div>
                <p className="text-foreground/70">Growth in Social Media Engagement</p>
              </div>
              
              <div className="bg-gradient-to-br from-brandBlue/10 to-brandBlue/5 p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-brandBlue" />
                <div className="text-3xl font-display font-bold mb-2">67%+</div>
                <p className="text-foreground/70">Increase in Qualified Lead Generation</p>
              </div>
              
              <div className="bg-gradient-to-br from-brandBlue/10 to-brandBlue/5 p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-brandBlue" />
                <div className="text-3xl font-display font-bold mb-2">45%+</div>
                <p className="text-foreground/70">Reduction in Customer Acquisition Cost</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Logos Section - Now using our reusable component */}
        <ServiceClientLogos 
          heading="Trusted By Marketing Clients"
          subheading="Join these forward-thinking organizations who've chosen our digital marketing expertise"
          backgroundColor="bg-marzipan/20"
        />
        
        {/* CTA and Contact Form Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-brandBlue to-brandBlue/80 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-semibold">
                  Ready to amplify your message?
                </h2>
                <p className="text-xl text-white/90">
                  Get in touch to discuss how our digital marketing strategies can help your purpose-driven brand reach and connect with your ideal audience.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
                  <h3 className="text-2xl font-display mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Specialized in purpose-driven marketing strategies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Integrated approach across social and search platforms</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Data-driven campaigns with measurable ROI</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Ethical marketing practices that build trust</span>
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
                          <FormLabel>Your Marketing Goals</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your marketing goals and challenges..."
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

export default DigitalMarketing;
