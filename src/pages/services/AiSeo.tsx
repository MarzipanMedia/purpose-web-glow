import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Check, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useIsMobile } from '../../hooks/use-mobile';

const AiSeo = () => {
  const form = useForm();
  const isMobile = useIsMobile();

  const onSubmit = (data: any) => {
    console.log(data);
    // Form submission logic would go here
  };

  const clientLogos = [
    { name: 'EcoLiving Collective', initial: 'E' },
    { name: 'Sustainable Solutions Co.', initial: 'S' },
    { name: 'Green Growth Partners', initial: 'G' },
    { name: 'Community Earth', initial: 'C' },
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
                  AI-Driven Strategies
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Ethical AI SEO for Sustainable Growth
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  Harness the power of AI to drive sustainable SEO strategies that align with your values and deliver long-term results.
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
                <div className="bg-gradient-to-br from-brandBlue to-brandBlue/70 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <Brain className="h-10 w-10 mr-4 text-white" />
                    <h2 className="text-2xl font-display text-white">Why Choose AI SEO?</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/90">Ethical AI practices that respect user privacy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/90">Data-driven insights for informed decision-making</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/90">Sustainable strategies that benefit both your business and the planet</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/90">Improved search rankings and organic traffic</span>
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
                Our AI SEO Services
              </h2>
              <p className="text-foreground/80">
                Leverage our AI-powered SEO solutions to enhance your online presence, drive organic growth, and make a positive impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">AI Keyword Research</h3>
                  <p className="text-foreground/70">
                    Identify high-value keywords with AI-driven analysis to target the right audience and drive relevant traffic.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">AI Content Optimisation</h3>
                  <p className="text-foreground/70">
                    Enhance your content with AI-powered recommendations to improve readability, relevance, and search engine rankings.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">AI Link Building</h3>
                  <p className="text-foreground/70">
                    Build high-quality backlinks with AI-driven strategies that identify relevant and authoritative websites.
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
                  Our AI SEO Process
                </h2>
                <p className="text-lg text-foreground/80">
                  We leverage cutting-edge AI technology to develop and implement ethical SEO strategies that drive sustainable growth.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">1</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">AI-Driven Audit</h4>
                      <p className="text-foreground/70">Comprehensive website analysis using AI to identify opportunities for improvement.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">2</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Strategy Development</h4>
                      <p className="text-foreground/70">Crafting a tailored SEO strategy based on AI insights and your unique business goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">3</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Ethical Implementation</h4>
                      <p className="text-foreground/70">Implementing AI-powered SEO techniques with a focus on ethical practices and user experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">4</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Analysis & Optimisation</h4>
                      <p className="text-foreground/70">Continuous monitoring and data-driven refinement to improve search performance.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-secondary/40 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                    Free AI SEO Consultation
                  </h3>
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      Get a complimentary consultation to discover how AI can transform your SEO strategy.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>AI-driven website audit</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Keyword opportunity analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Competitor benchmarking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Actionable AI SEO recommendations</span>
                      </div>
                    </div>
                    <Link 
                      to="#contact" 
                      className="btn-primary w-full justify-center mt-6 md:mt-8"
                    >
                      Schedule Your Consultation
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
                Join these forward-thinking organizations who've chosen our AI SEO expertise
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
                  Ready to unlock the power of AI SEO?
                </h2>
                <p className="text-xl text-white/90">
                  Get in touch to discuss how our AI-driven strategies can help your brand achieve sustainable growth and make a positive impact.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
                  <h3 className="text-2xl font-display mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Ethical AI practices that respect user privacy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Data-driven insights for informed decision-making</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Sustainable strategies for long-term growth</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Improved search rankings and organic traffic</span>
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
                          <FormLabel>Your SEO Goals</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your SEO goals and challenges..."
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

export default AiSeo;
