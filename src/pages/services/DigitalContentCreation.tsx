import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Film, Image, Video, MessageSquare, Users, Share2, Camera, Youtube, Instagram, Mic, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import MetaHead from '../../components/MetaHead';
import ServiceClientLogos from '../../components/services/ServiceClientLogos';

const DigitalContentCreation = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Form submission logic would go here
  };

  const contentTypes = [
    {
      title: "Brand Video Production",
      description: "Compelling brand videos that tell your story and showcase your values to connect with your audience.",
      icon: <Film className="h-6 w-6" />,
      features: ["Brand documentaries", "Company culture films", "Product showcases", "Customer testimonials"]
    },
    {
      title: "User-Generated Content",
      description: "Authentic UGC that leverages the voice of your customers to build trust and drive engagement.",
      icon: <Users className="h-6 w-6" />,
      features: ["UGC campaign management", "Content curation", "Creator partnerships", "Performance analytics"]
    },
    {
      title: "Corporate Event Coverage",
      description: "Professional capture of corporate events, conferences and internal communications.",
      icon: <Camera className="h-6 w-6" />,
      features: ["Live event filming", "Highlight reels", "Speaker interviews", "Post-event recap videos"]
    },
    {
      title: "Social Media Content",
      description: "Eye-catching, platform-optimised content designed to increase engagement and grow your following.",
      icon: <Share2 className="h-6 w-6" />,
      features: ["Social media videos", "Platform-specific content", "Reels and shorts", "Social stories"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Digital Content Creation Services" 
        description="Professional video production, UGC content, influencer marketing and digital PR services for purpose-driven brands. Create authentic content that resonates with your audience." 
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
                  Video & Content Production
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Digital Content That Tells Your Story
                </h1>
                <p className="text-lg text-foreground/80 mb-8">
                  From brand videos and UGC to influencer campaigns and digital PR, we create authentic content that resonates with your audience and amplifies your purpose.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="#contact" className="btn-primary flex items-center gap-2">
                    Start Your Content Journey <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/projects" className="btn-secondary flex items-center gap-2">
                    View Our Portfolio <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-gradient-to-br from-marzipan to-marzipan/70 rounded-lg p-8 text-foreground">
                  <div className="flex items-center mb-6">
                    <Video className="h-10 w-10 mr-4 text-brandBlue" />
                    <h2 className="text-2xl font-display">Why Choose Our Content?</h2>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-brandBlue/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brandBlue" />
                      </div>
                      <span>Authentic storytelling that aligns with your brand values</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-brandBlue/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brandBlue" />
                      </div>
                      <span>Multi-platform content optimised for maximum engagement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-brandBlue/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brandBlue" />
                      </div>
                      <span>Sustainable production practices reducing environmental impact</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 bg-brandBlue/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brandBlue" />
                      </div>
                      <span>End-to-end content strategy, creation and distribution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Types Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Our Content Creation Services
              </h2>
              <p className="text-foreground/80">
                Comprehensive digital content solutions designed to tell your story authentically and engage your audience effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((content, index) => (
                <Card 
                  key={index} 
                  className="border-marzipan/30 animate-fade-in hover:shadow-md transition-all"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="bg-brandBlue/10 text-brandBlue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {content.icon}
                    </div>
                    <h3 className="text-xl font-display font-medium mb-3">{content.title}</h3>
                    <p className="text-foreground/70 mb-4">
                      {content.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                      {content.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-brandRed"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-marzipan/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold mb-6 text-center">
                    Our Content Production Process
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">1</span>
                      <div>
                        <h4 className="text-xl font-medium mb-1">Discovery & Strategy</h4>
                        <p className="text-foreground/70">Understanding your brand, audience, and goals to create content that aligns with your purpose.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">2</span>
                      <div>
                        <h4 className="text-xl font-medium mb-1">Creative Development</h4>
                        <p className="text-foreground/70">Crafting compelling concepts and storyboards that capture your unique brand story.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">3</span>
                      <div>
                        <h4 className="text-xl font-medium mb-1">Production</h4>
                        <p className="text-foreground/70">Executing content creation with sustainable practices and attention to detail.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brandBlue text-white font-medium">4</span>
                      <div>
                        <h4 className="text-xl font-medium mb-1">Optimisation & Distribution</h4>
                        <p className="text-foreground/70">Refining and tailoring content for each platform to maximise engagement and reach.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl md:text-4xl font-display font-semibold">
                  The Power of Authentic Content
                </h2>
                <p className="text-lg text-foreground/80">
                  In today's digital landscape, authentic content is the key to building trust and driving engagement. Our approach combines creativity with strategy to create content that:
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-brandBlue/10 p-2 rounded-full text-brandBlue">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Amplifies Your Voice</h4>
                      <p className="text-foreground/70">Ensures your brand message resonates clearly and authentically with your audience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-brandBlue/10 p-2 rounded-full text-brandBlue">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Builds Community</h4>
                      <p className="text-foreground/70">Creates content that encourages meaningful engagement and fosters brand loyalty.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-brandBlue/10 p-2 rounded-full text-brandBlue">
                      <LineChart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Drives Results</h4>
                      <p className="text-foreground/70">Strategic content designed to move your audience through the customer journey.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Platform Expertise Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Multi-Platform Content Expertise
              </h2>
              <p className="text-foreground/80">
                We create purpose-driven content optimised for every platform where your audience spends their time
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-brandBlue/10 to-brandBlue/5 p-6 rounded-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center mb-4">
                  <div className="bg-brandBlue/20 p-2 rounded-full mr-3">
                    <Instagram className="h-6 w-6 text-brandBlue" />
                  </div>
                  <h3 className="text-xl font-display font-medium">Instagram & TikTok</h3>
                </div>
                <p className="text-foreground/70">
                  Short-form videos, reels, and stories that capture attention and drive engagement with the latest platform features and trends.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-brandBlue/10 to-brandBlue/5 p-6 rounded-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center mb-4">
                  <div className="bg-brandBlue/20 p-2 rounded-full mr-3">
                    <Youtube className="h-6 w-6 text-brandBlue" />
                  </div>
                  <h3 className="text-xl font-display font-medium">YouTube & LinkedIn</h3>
                </div>
                <p className="text-foreground/70">
                  Long-form content and thought leadership videos that establish expertise and provide in-depth value to your audience.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-brandBlue/10 to-brandBlue/5 p-6 rounded-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center mb-4">
                  <div className="bg-brandBlue/20 p-2 rounded-full mr-3">
                    <MessageSquare className="h-6 w-6 text-brandBlue" />
                  </div>
                  <h3 className="text-xl font-display font-medium">Website & Email</h3>
                </div>
                <p className="text-foreground/70">
                  Conversion-focused videos and content designed to enhance your website experience and nurture leads through email.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/digital-marketing" className="inline-flex items-center gap-2 text-brandBlue hover:text-brandBlue/80">
                Explore our Digital Marketing Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Digital PR & Influencer Section */}
        <section className="py-16 bg-brandBlue text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                  Digital PR & Influencer Marketing
                </h2>
                <p className="text-xl text-white/90 mb-6">
                  Amplify your reach and credibility through strategic partnerships with media outlets and value-aligned creators.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Influencer Partnerships</h3>
                    <p className="text-white/80">
                      We connect your brand with authentic content creators who share your values and can tell your story to engaged audiences.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-marzipan" />
                        <span>Creator identification and vetting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-marzipan" />
                        <span>Campaign strategy and management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-marzipan" />
                        <span>Performance tracking and optimisation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Digital PR Services</h3>
                    <p className="text-white/80">
                      Elevate your brand through media coverage, thought leadership, and strategic online placements.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-marzipan" />
                        <span>Media relations and press coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-marzipan" />
                        <span>Expert commentary placements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-marzipan" />
                        <span>Digital publication features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white text-foreground rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-display font-semibold mb-6 text-center">
                    Request a Content Strategy Session
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
                            <FormLabel>Company/Organisation</FormLabel>
                            <FormControl>
                              <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                placeholder="Your Organisation"
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
                        Request Strategy Session
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        Your information will never be shared with third parties.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Client Logos Section - Now using our reusable component */}
        <ServiceClientLogos 
          heading="Trusted By Content Clients"
          subheading="Join these forward-thinking organisations who've chosen our content expertise"
          backgroundColor="bg-white"
        />
        
        {/* CTA Section */}
        <section id="contact" className="py-16 bg-marzipan/30">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-display font-semibold mb-4">
                Ready to Create Content That Matters?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Let's discuss how our content creation services can help amplify your brand's purpose and connect with your audience authentically.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="btn-primary flex items-center gap-2"
                >
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  to="/services/digital-marketing" 
                  className="btn-secondary flex items-center gap-2"
                >
                  Explore Digital Marketing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalContentCreation;
