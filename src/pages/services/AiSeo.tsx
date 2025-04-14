import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Check, LineChart, BarChart, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const AiSeo = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Form submission logic would go here
  };

  const clientLogos = [
    { name: 'Green Growth Partners', initial: 'G' },
    { name: 'EcoLiving Collective', initial: 'E' },
    { name: 'Sustainable Solutions Co.', initial: 'S' },
    { name: 'Organic Earth', initial: 'O' },
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
                <div className="inline-block bg-brandRed/10 text-brandRed px-4 py-1 rounded-full mb-4">
                  Smart Optimization
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  AI-Driven SEO for Purpose-Led Brands
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  Ethical optimisation strategies powered by the latest AI tools to help your purpose-driven brand reach the right audience.
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
                <div className="bg-gradient-to-br from-brandRed to-brandRed/70 rounded-lg p-8 text-white">
                  <div className="flex items-center mb-6">
                    <Search className="h-10 w-10 mr-4" />
                    <h2 className="text-2xl font-display">Why Choose AI-Driven SEO?</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Precision targeting focused on your ideal audience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Advanced content optimization for higher rankings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Data-driven strategies that evolve with algorithm changes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Ethical approaches that align with your brand values</span>
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
                Our AI-Powered SEO Services
              </h2>
              <p className="text-foreground/80">
                Leveraging cutting-edge artificial intelligence to boost your organic visibility while maintaining your brand's integrity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandRed/10 text-brandRed rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">AI Content Optimization</h3>
                  <p className="text-foreground/70">
                    Advanced AI analysis ensures your content satisfies both search engines and human readers with perfect keyword balance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandRed/10 text-brandRed rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Semantic Search Strategy</h3>
                  <p className="text-foreground/70">
                    Target search intent rather than just keywords to connect with users who are truly interested in your mission.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandRed/10 text-brandRed rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Predictive Analytics</h3>
                  <p className="text-foreground/70">
                    Stay ahead of trends with AI-powered forecasting that helps you create content before your audience searches for it.
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
                  Our AI-Driven SEO Process
                </h2>
                <p className="text-lg text-foreground/80">
                  We combine advanced AI tools with human expertise to create SEO strategies that truly understand your audience.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandRed text-white font-medium">1</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Deep Analysis</h4>
                      <p className="text-foreground/70">AI-powered auditing of your current SEO performance and competitive landscape.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandRed text-white font-medium">2</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Strategic Planning</h4>
                      <p className="text-foreground/70">Creating a tailored SEO roadmap based on AI insights and your brand values.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandRed text-white font-medium">3</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Optimized Implementation</h4>
                      <p className="text-foreground/70">Executing strategies with continuous AI monitoring for maximum effectiveness.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandRed text-white font-medium">4</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Adaptive Refinement</h4>
                      <p className="text-foreground/70">Ongoing optimization using machine learning to adapt to changing algorithms and market conditions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-secondary/40 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                    Free SEO Performance Analysis
                  </h3>
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      Discover how AI-driven strategies can transform your organic visibility with our complimentary analysis.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Keyword opportunity assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Content gap analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Technical SEO evaluation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Competitor positioning insights</span>
                      </div>
                    </div>
                    <Link 
                      to="#contact" 
                      className="btn-primary w-full justify-center"
                    >
                      Get Your Free Analysis
                    </Link>
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
                Measurable Results For Purpose-Driven Brands
              </h2>
              <p className="text-foreground/80">
                Our AI-powered SEO strategies deliver meaningful metrics that matter to your mission
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-brandRed/10 to-brandRed/5 p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <LineChart className="h-12 w-12 mx-auto mb-4 text-brandRed" />
                <div className="text-3xl font-display font-bold mb-2">150%+</div>
                <p className="text-foreground/70">Average Organic Traffic Increase</p>
              </div>
              
              <div className="bg-gradient-to-br from-brandRed/10 to-brandRed/5 p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <LineChart className="h-12 w-12 mx-auto mb-4 text-brandRed" />
                <div className="text-3xl font-display font-bold mb-2">80%+</div>
                <p className="text-foreground/70">More Qualified Lead Generation</p>
              </div>
              
              <div className="bg-gradient-to-br from-brandRed/10 to-brandRed/5 p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <LineChart className="h-12 w-12 mx-auto mb-4 text-brandRed" />
                <div className="text-3xl font-display font-bold mb-2">40%+</div>
                <p className="text-foreground/70">Lower Bounce Rates</p>
              </div>
              
              <div className="bg-gradient-to-br from-brandRed/10 to-brandRed/5 p-6 rounded-lg text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <LineChart className="h-12 w-12 mx-auto mb-4 text-brandRed" />
                <div className="text-3xl font-display font-bold mb-2">65%+</div>
                <p className="text-foreground/70">Higher Conversion Rates</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Logos Section */}
        <section className="py-14 bg-marzipan/20">
          <div className="container-custom">
            <div className="text-center mb-10 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                Trusted By Purpose-Driven Brands
              </h2>
              <p className="text-foreground/70">
                Join these forward-thinking organizations who've chosen our AI-driven approach
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clientLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-6 rounded-lg border border-marzipan/30 bg-white animate-fade-in hover:bg-marzipan/5 transition-all duration-300"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="h-16 w-16 rounded-full bg-brandRed/10 flex items-center justify-center text-2xl font-display text-brandRed font-semibold mb-3">
                    {client.initial}
                  </div>
                  <p className="text-center font-medium">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA and Contact Form Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-brandRed to-brandRed/80 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-semibold">
                  Ready to boost your organic visibility?
                </h2>
                <p className="text-xl text-white/90">
                  Get in touch to discuss how our AI-driven SEO strategies can help your purpose-driven brand connect with the right audience.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
                  <h3 className="text-2xl font-display mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Specialized in ethical SEO for purpose-driven brands</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>AI-powered strategies that adapt to algorithm changes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Focus on meaningful metrics that drive your mission</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Transparent reporting and continuous optimization</span>
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
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL</FormLabel>
                          <FormControl>
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              placeholder="https://yourwebsite.com"
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
                              placeholder="Tell us about your SEO goals..."
                              className="resize-none min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brandRed hover:bg-brandRed/90 flex items-center justify-center"
                    >
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
