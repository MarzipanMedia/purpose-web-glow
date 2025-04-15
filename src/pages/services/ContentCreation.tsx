import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Check, FileText, Pencil, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const ContentCreation = () => {
  const form = useForm();

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
                <div className="inline-block bg-marzipan px-4 py-1 rounded-full mb-4">
                  Compelling Storytelling
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Content Creation That Connects & Converts
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  Compelling storytelling that resonates with your audience and drives meaningful engagement and conversions.
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
                <div className="bg-gradient-to-br from-marzipan to-marzipan/70 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <MessageSquare className="h-10 w-10 mr-4 text-brandBlue" />
                    <h2 className="text-2xl font-display">Why Choose Our Content?</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-brandBlue/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brandBlue" />
                      </div>
                      <span className="text-foreground/80">Purpose-driven storytelling that reflects your values</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-brandBlue/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brandBlue" />
                      </div>
                      <span className="text-foreground/80">SEO-optimised content that ranks and converts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-brandBlue/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brandBlue" />
                      </div>
                      <span className="text-foreground/80">Multi-format content strategy across all channels</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-brandBlue/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brandBlue" />
                      </div>
                      <span className="text-foreground/80">Data-driven approach that measures impact</span>
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
                Our Content Creation Services
              </h2>
              <p className="text-foreground/80">
                From strategy to execution, we create purpose-driven content that connects with your audience across all channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Blog & Article Writing</h3>
                  <p className="text-foreground/70">
                    Engaging, SEO-optimised blog posts and articles that establish your authority and drive organic traffic.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Pencil className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Website & Email Copy</h3>
                  <p className="text-foreground/70">
                    Persuasive website content and email campaigns that convert visitors into dedicated supporters.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Video className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3">Video & Visual Content</h3>
                  <p className="text-foreground/70">
                    Compelling video scripts and visual content strategies that tell your story across multiple platforms.
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
                  Our Content Creation Process
                </h2>
                <p className="text-lg text-foreground/80">
                  We follow a proven methodology to develop content that authentically represents your brand and resonates with your audience.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">1</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Discovery & Strategy</h4>
                      <p className="text-foreground/70">Understanding your mission, audience, and content goals to develop a strategic roadmap.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">2</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Content Planning</h4>
                      <p className="text-foreground/70">Creating a detailed editorial calendar with topics that align with your values and audience needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">3</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Creation & Optimisation</h4>
                      <p className="text-foreground/70">Crafting engaging, purpose-driven content optimised for both humans and search engines.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">4</span>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Distribution & Analysis</h4>
                      <p className="text-foreground/70">Strategic distribution and continuous performance tracking to maximise impact.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-secondary/40 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                    Free Content Strategy Consultation
                  </h3>
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      Schedule a complimentary 30-minute consultation to discuss your content needs and goals.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Content gap analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Audience targeting recommendations</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>Channel strategy assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>One actionable content idea</span>
                      </div>
                    </div>
                    <Link 
                      to="#contact" 
                      className="btn-primary w-full justify-center"
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
                Join these forward-thinking organizations who've chosen our content creation services
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
                  Ready to create content with purpose?
                </h2>
                <p className="text-xl text-white/90">
                  Get in touch to discuss how our content creation services can help your brand connect with your audience and drive meaningful action.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
                  <h3 className="text-2xl font-display mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Specialized in purpose-driven brand storytelling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>SEO-optimized content that ranks and converts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Multi-format approach for all channels</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-white/20 p-1 rounded-full">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>Measurable results tied to your goals</span>
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
                          <FormLabel>Your Content Needs</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your content goals and challenges..."
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

export default ContentCreation;
