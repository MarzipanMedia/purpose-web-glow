
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, BookOpen, Mail, Check } from 'lucide-react';
import MetaHead from '../components/MetaHead';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Badge } from '../components/ui/badge';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ResourcesPage = () => {
  const ebooks = [
    {
      id: 1,
      title: "Mastering Ethical SEO",
      description: "Learn how to improve your site's visibility with sustainable, ethical SEO practices that prioritize both people and the planet.",
      image: "/ebook-seo.jpg",
      price: "$29",
      features: [
        "45+ actionable SEO techniques",
        "Case studies from sustainable brands",
        "Improve rankings while staying true to your values",
        "Lifetime updates"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Social Media for Purpose-Driven Brands",
      description: "Build an authentic social presence that resonates with your audience and drives meaningful engagement.",
      image: "/ebook-social.jpg",
      price: "$24",
      features: [
        "Content calendar templates",
        "Engagement strategy framework",
        "Analytics interpretation guide",
        "Platform-specific tactics"
      ],
      popular: false
    },
    {
      id: 3,
      title: "Sustainable Digital Marketing Playbook",
      description: "A comprehensive guide to creating digital marketing strategies that drive results while minimizing environmental impact.",
      image: "/ebook-marketing.jpg",
      price: "$34",
      features: [
        "Complete marketing framework",
        "Carbon-conscious campaign planning",
        "Performance tracking templates",
        "Ethical targeting strategies"
      ],
      popular: false
    }
  ];

  const resources = [
    {
      title: "Website Carbon Calculator Guide",
      description: "Learn how to measure and reduce your website's carbon footprint",
      type: "guide",
      free: true
    },
    {
      title: "Content Creation Templates",
      description: "10 ready-to-use templates to streamline your content creation process",
      type: "templates",
      free: true
    },
    {
      title: "SEO Audit Checklist",
      description: "Comprehensive checklist to evaluate your site's SEO performance",
      type: "checklist",
      free: true
    }
  ];

  return (
    <>
      <MetaHead 
        title="Digital Marketing Resources & Ebooks" 
        description="Download our collection of sustainable digital marketing ebooks, guides and templates to help your purpose-driven brand grow online."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brandBlue to-brandBlue/80 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6">
                Digital Resources for Sustainable Growth
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
                Practical guides and tools to help purpose-driven brands create meaningful digital impact while prioritizing sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-brandBlue hover:bg-marzipan transition-all px-8 py-6 text-base"
                  asChild
                >
                  <a href="#ebooks">Browse Ebooks <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button 
                  className="bg-transparent border-2 border-white hover:bg-white/10 transition-all px-8 py-6 text-base"
                  asChild
                >
                  <a href="#free-resources">Free Resources <Download className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full bg-brandRed rounded-lg"></div>
                <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-brandBlue text-xl font-semibold mb-4">Get our Free SEO Checklist</h3>
                  <p className="text-foreground/80 mb-6">Join our mailing list to receive this valuable resource instantly.</p>
                  <form className="space-y-4">
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="py-6 bg-white"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-brandRed hover:bg-brandRed/90 text-white py-6"
                    >
                      Send Me the Checklist <Mail className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ebook */}
      <section className="py-16 md:py-24 bg-marzipan/20 dark:bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center bg-white dark:bg-gray-900 p-6 md:p-10 rounded-xl shadow-md">
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/ebook-seo.jpg" 
                  alt="Mastering Ethical SEO Ebook Cover" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/400x500/186074/FFF?text=SEO+Ebook";
                  }} 
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <Badge className="bg-brandRed text-white mb-4">Featured Resource</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 dark:text-white">
                Mastering Ethical SEO
              </h2>
              <p className="text-foreground/80 mb-6 dark:text-gray-300">
                Our comprehensive guide to improving your site's visibility with sustainable, ethical SEO practices that align with your brand values while driving real results.
              </p>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 dark:text-white">What's Inside:</h4>
                <ul className="space-y-2">
                  {ebooks[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-brandBlue flex-shrink-0 mt-0.5" />
                      <span className="dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <span className="text-2xl font-semibold dark:text-white">{ebooks[0].price}</span>
                <Button 
                  className="bg-brandBlue hover:bg-brandBlue/90 text-white py-6 px-8"
                >
                  Get the Ebook <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Banner */}
      <section className="py-12 bg-gradient-to-r from-brandRed to-brandRed/80 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                Get exclusive resources in your inbox
              </h3>
              <p className="text-white/90">
                Subscribe to receive free guides, checklists, and early access to new resources.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="min-w-[280px] bg-white py-6"
                />
                <Button 
                  type="submit" 
                  className="bg-white text-brandRed hover:bg-marzipan py-6"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* All Ebooks */}
      <section id="ebooks" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 dark:text-white">
              Our Digital Marketing Ebooks
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto dark:text-gray-300">
              Comprehensive guides packed with actionable insights to help your purpose-driven brand succeed online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <Card key={ebook.id} className={`overflow-hidden h-full flex flex-col transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 ${ebook.popular ? 'ring-2 ring-brandRed' : ''}`}>
                <div className="aspect-[3/2] bg-gray-100 dark:bg-gray-700 relative">
                  <img 
                    src={ebook.image} 
                    alt={`${ebook.title} cover`} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/600x400/186074/FFF?text=Ebook+${ebook.id}`;
                    }} 
                  />
                  {ebook.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brandRed text-white">Most Popular</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="dark:text-white">{ebook.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{ebook.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {ebook.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-brandBlue flex-shrink-0 mt-1" />
                        <span className="text-sm dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t dark:border-gray-700 pt-4">
                  <span className="text-xl font-semibold dark:text-white">{ebook.price}</span>
                  <Button 
                    className="bg-brandBlue hover:bg-brandBlue/90 text-white"
                  >
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section id="free-resources" className="py-16 md:py-24 bg-marzipan/20 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 dark:text-white">
              Free Resources
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto dark:text-gray-300">
              Valuable tools and guides to help you start implementing sustainable digital strategies right away.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, idx) => (
              <Card key={idx} className="overflow-hidden transition-all hover:shadow-lg dark:bg-gray-900 dark:border-gray-700">
                <CardHeader>
                  <div className="mb-3">
                    <Badge className="bg-brandBlue text-white">{resource.type}</Badge>
                  </div>
                  <CardTitle className="dark:text-white">{resource.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t dark:border-gray-700 pt-4">
                  <Button 
                    className="w-full bg-brandBlue hover:bg-brandBlue/90 text-white"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Get Access
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 dark:text-white">
              What Our Readers Say
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto dark:text-gray-300">
              Here's how our resources have helped other purpose-driven brands succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="bg-marzipan/10 p-6 rounded-lg shadow-sm dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/90 mb-4 dark:text-gray-200">
                  "The strategies in the Ethical SEO ebook completely transformed our approach to digital marketing. We've seen a 43% increase in organic traffic while staying true to our sustainable values."
                </p>
                <Separator className="mb-4 dark:bg-gray-700" />
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brandBlue rounded-full mr-3 flex items-center justify-center text-white font-semibold">
                    {String.fromCharCode(64 + idx)}
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">Jane Smith</h4>
                    <p className="text-sm text-foreground/70 dark:text-gray-400">Marketing Director, EcoLiving</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brandBlue to-brandBlue/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Ready to Transform Your Digital Strategy?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Our resources provide actionable insights to help your purpose-driven brand create meaningful impact online.
          </p>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="py-6 bg-white"
              />
              <Button 
                type="submit" 
                className="w-full bg-white text-brandBlue hover:bg-marzipan transition-all py-6"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              By subscribing, you'll receive our free SEO checklist and occasional updates about new resources.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ResourcesPage;
