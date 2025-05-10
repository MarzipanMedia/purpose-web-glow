
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MetaHead from '@/components/MetaHead';
import { ServiceSchema } from '@/components/seo/SchemaComponents';
import BreadcrumbNav from '@/components/navigation/BreadcrumbNav';
import { ArrowRight, CheckCircle2, Leaf, Zap, BarChart3, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SustainableWebDesign = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Sustainable Web Design Services" 
        description="Eco-friendly web design services that reduce your carbon footprint while creating beautiful, high-performing websites."
      />
      
      {/* Add service schema */}
      <ServiceSchema 
        serviceName="Sustainable Web Design"
        serviceDescription="Eco-friendly web design services that reduce your carbon footprint while creating beautiful, high-performing websites."
        serviceUrl="https://marzipan.com.au/services/sustainable-web-design"
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Updated with brand colors */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-marzipan/30 to-marzipan/50">
          <div className="container-custom">
            <BreadcrumbNav />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-marzipan/50 text-brandBlue px-4 py-1 rounded-full text-sm font-medium">
                  Sustainable Web Design
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Beautiful websites with a <span className="bg-gradient-to-r from-brandBlue to-brandRed bg-clip-text text-transparent">smaller footprint</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-lg">
                  We create stunning, high-performance websites that minimise environmental impact while maximising your online presence and conversion rates.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/contact" className="btn-primary bg-brandBlue hover:bg-brandBlue/90 flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/website-carbon" className="btn-secondary border-brandBlue text-brandBlue hover:bg-brandBlue/5 flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-marzipan/50 to-marzipan/70 rounded-full blur-3xl opacity-20 transform -rotate-12"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-xl border border-marzipan/30">
                  <div className="aspect-video bg-marzipan/20 rounded-lg overflow-hidden flex items-center justify-center mb-6">
                    <img 
                      src="/webdesign-agency-min.webp" 
                      alt="Sustainable Web Design Sydney" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-marzipan/20 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-brandBlue font-medium mb-1">
                        <Leaf className="h-4 w-4" />
                        <span>Eco-Friendly</span>
                      </div>
                      <p className="text-sm text-gray-600">Reduced carbon footprint with optimised assets</p>
                    </div>
                    <div className="bg-marzipan/20 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-brandBlue font-medium mb-1">
                        <Zap className="h-4 w-4" />
                        <span>Performance</span>
                      </div>
                      <p className="text-sm text-gray-600">Lightning-fast load times and smooth UX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Sustainable Web Design?</h2>
              <p className="text-lg text-gray-700">
                Beyond reducing environmental impact, sustainable web design offers numerous benefits for your business and users.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-marzipan/30 rounded-full flex items-center justify-center text-brandBlue mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Faster Performance</h3>
                <p className="text-gray-700">
                  Optimised code and assets mean your site loads quickly, reducing bounce rates and improving user experience.
                </p>
              </div>
              
              <div className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-marzipan/30 rounded-full flex items-center justify-center text-brandBlue mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Better SEO Rankings</h3>
                <p className="text-gray-700">
                  Search engines favour fast, efficient websites. Sustainable design principles naturally improve your SEO performance.
                </p>
              </div>
              
              <div className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-marzipan/30 rounded-full flex items-center justify-center text-brandBlue mb-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reduced Carbon Footprint</h3>
                <p className="text-gray-700">
                  Minimise your environmental impact with efficient hosting, optimised images, and streamlined code.
                </p>
              </div>
              
              <div className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-marzipan/30 rounded-full flex items-center justify-center text-brandBlue mb-4">
                  <Palette className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
                <p className="text-gray-700">
                  Sustainability doesn't mean sacrificing aesthetics. Our designs are both beautiful and environmentally responsible.
                </p>
              </div>
              
              <div className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-marzipan/30 rounded-full flex items-center justify-center text-brandBlue mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-gray-700">
                  Efficient websites require less bandwidth and server resources, reducing your hosting costs over time.
                </p>
              </div>
              
              <div className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-marzipan/30 rounded-full flex items-center justify-center text-brandBlue mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Brand Reputation</h3>
                <p className="text-gray-700">
                  Demonstrate your commitment to sustainability and attract environmentally conscious customers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Process Section */}
        <section className="py-16 bg-marzipan/20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sustainable Design Process</h2>
              <p className="text-lg text-gray-700">
                We follow a comprehensive approach to ensure your website is both beautiful and environmentally responsible.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-marzipan/60 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-marzipan/20">
                        <h3 className="text-xl font-semibold mb-2">1. Discovery & Planning</h3>
                        <p className="text-gray-700 mb-4">
                          We begin by understanding your business goals, target audience, and sustainability objectives to create a strategic plan.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center justify-end gap-2">
                            <span>Stakeholder interviews</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                          <li className="flex items-center justify-end gap-2">
                            <span>Competitor analysis</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                          <li className="flex items-center justify-end gap-2">
                            <span>Sustainability benchmarking</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="absolute left-1/2 top-6 w-12 h-12 bg-marzipan/30 rounded-full border-4 border-white flex items-center justify-center text-brandBlue transform -translate-x-1/2 md:block hidden">
                      <span className="font-bold">1</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="hidden md:block"></div>
                    <div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-marzipan/20">
                        <h3 className="text-xl font-semibold mb-2">2. Sustainable Design</h3>
                        <p className="text-gray-700 mb-4">
                          We create beautiful, efficient designs that minimise resource usage while maximising user experience.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                            <span>Efficient colour palettes</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                            <span>System font optimisation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                            <span>Minimalist, purposeful UI</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-6 w-12 h-12 bg-marzipan/30 rounded-full border-4 border-white flex items-center justify-center text-brandBlue transform -translate-x-1/2 md:block hidden">
                      <span className="font-bold">2</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-marzipan/20">
                        <h3 className="text-xl font-semibold mb-2">3. Eco-Friendly Development</h3>
                        <p className="text-gray-700 mb-4">
                          We build your site with clean, efficient code and optimise all assets for minimal environmental impact.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center justify-end gap-2">
                            <span>Optimised code architecture</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                          <li className="flex items-center justify-end gap-2">
                            <span>Compressed images & assets</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                          <li className="flex items-center justify-end gap-2">
                            <span>Efficient caching strategies</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="absolute left-1/2 top-6 w-12 h-12 bg-marzipan/30 rounded-full border-4 border-white flex items-center justify-center text-brandBlue transform -translate-x-1/2 md:block hidden">
                      <span className="font-bold">3</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="hidden md:block"></div>
                    <div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-marzipan/20">
                        <h3 className="text-xl font-semibold mb-2">4. Testing & Optimisation</h3>
                        <p className="text-gray-700 mb-4">
                          We rigorously test and optimise your site for performance, accessibility, and environmental impact.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                            <span>Performance benchmarking</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                            <span>Carbon footprint measurement</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                            <span>Accessibility compliance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-6 w-12 h-12 bg-marzipan/30 rounded-full border-4 border-white flex items-center justify-center text-brandBlue transform -translate-x-1/2 md:block hidden">
                      <span className="font-bold">4</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-marzipan/20">
                        <h3 className="text-xl font-semibold mb-2">5. Launch & Monitoring</h3>
                        <p className="text-gray-700 mb-4">
                          We deploy your site on green hosting and provide ongoing monitoring to maintain optimal performance.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center justify-end gap-2">
                            <span>Green hosting setup</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                          <li className="flex items-center justify-end gap-2">
                            <span>Performance monitoring</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                          <li className="flex items-center justify-end gap-2">
                            <span>Carbon reduction reporting</span>
                            <CheckCircle2 className="h-5 w-5 text-brandBlue flex-shrink-0" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="absolute left-1/2 top-6 w-12 h-12 bg-marzipan/30 rounded-full border-4 border-white flex items-center justify-center text-brandBlue transform -translate-x-1/2 md:block hidden">
                      <span className="font-bold">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Web Design Features</h2>
              <p className="text-lg text-gray-700">
                Our sustainable websites include these eco-friendly features without compromising on quality or performance.
              </p>
            </div>
            
            <Tabs defaultValue="performance" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="hosting">Hosting</TabsTrigger>
              </TabsList>
              
              <TabsContent value="performance" className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Lightning-Fast Performance</h3>
                    <p className="text-gray-700 mb-6">
                      Our sustainable websites are built for speed, reducing energy consumption and improving user experience.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Optimised Code Structure</span>
                          <p className="text-sm text-gray-600">Clean, efficient code that minimises processing requirements</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Advanced Caching</span>
                          <p className="text-sm text-gray-600">Intelligent caching strategies to reduce server requests</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Lazy Loading</span>
                          <p className="text-sm text-gray-600">Load resources only when needed to reduce initial page weight</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="aspect-video bg-gray-100 rounded flex items-center justify-center mb-4">
                      <img 
                        src="/webdesign-sydney-bondi.png" 
                        alt="Website Performance Optimisation" 
                        className="w-full h-full object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-marzipan/20 rounded">
                      <span className="text-sm font-medium">Average Page Speed</span>
                      <span className="text-brandBlue font-bold">Under 2 seconds</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="design" className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Eco-Friendly Design Principles</h3>
                    <p className="text-gray-700 mb-6">
                      Our design approach balances aesthetics with environmental responsibility.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Optimised Image Strategy</span>
                          <p className="text-sm text-gray-600">Properly sized, compressed images with next-gen formats</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">System Font Usage</span>
                          <p className="text-sm text-gray-600">Prioritising system fonts to reduce resource loading</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Efficient Colour Palettes</span>
                          <p className="text-sm text-gray-600">Colours that require less energy to display on screens</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="aspect-video bg-gray-100 rounded flex items-center justify-center mb-4">
                      <img 
                        src="/marzipan-web-design-syd-min.webp" 
                        alt="Eco-Friendly Design Principles" 
                        className="w-full h-full object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-marzipan/20 rounded">
                      <span className="text-sm font-medium">Average Page Weight</span>
                      <span className="text-brandBlue font-bold">Under 1MB</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hosting" className="bg-marzipan/10 p-6 rounded-xl border border-marzipan/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Green Hosting Solutions</h3>
                    <p className="text-gray-700 mb-6">
                      We deploy your website on servers powered by renewable energy to minimise environmental impact.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Renewable Energy Servers</span>
                          <p className="text-sm text-gray-600">Hosting powered by wind, solar, or other renewable sources</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Energy-Efficient Data Centres</span>
                          <p className="text-sm text-gray-600">Servers with optimised cooling and power management</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brandBlue mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Carbon Offset Programmes</span>
                          <p className="text-sm text-gray-600">Additional carbon offsets to achieve carbon neutrality</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="aspect-video bg-gray-100 rounded flex items-center justify-center mb-4">
                      <img 
                        src="/green-web-hosting.avif" 
                        alt="Green Hosting Solutions" 
                        className="w-full h-full object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-marzipan/20 rounded">
                      <span className="text-sm font-medium">CO2 Reduction</span>
                      <span className="text-brandBlue font-bold">Up to 90%</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-marzipan/20">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Common questions about sustainable web design and our approach.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-xl overflow-hidden shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6 py-4 hover:bg-marzipan/10 transition-colors">
                    What makes a website "sustainable"?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      A sustainable website minimises environmental impact through efficient code, optimised assets, reduced data transfer, and green hosting. It's designed to use fewer resources while maintaining excellent performance and user experience. This includes optimised images, efficient coding practices, minimal use of third-party scripts, and deployment on servers powered by renewable energy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6 py-4 hover:bg-marzipan/10 transition-colors">
                    Does sustainable design affect website performance?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Actually, sustainable web design typically improves performance! The same practices that reduce environmental impact—like code optimisation, asset compression, and efficient loading strategies—also make websites faster and more responsive. Our sustainable websites often outperform conventional sites in speed tests and user experience metrics.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6 py-4 hover:bg-marzipan/10 transition-colors">
                    How do you measure a website's environmental impact?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      We use several tools and metrics to measure environmental impact, including:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Page weight (total KB transferred)</li>
                      <li>Number of HTTP requests</li>
                      <li>Carbon emissions per page view</li>
                      <li>Energy efficiency score</li>
                      <li>Server energy sources</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      We provide a detailed sustainability report with your website that tracks these metrics and suggests ongoing improvements.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6 py-4 hover:bg-marzipan/10 transition-colors">
                    Will a sustainable website cost more to develop?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      While sustainable web design may require more planning and expertise initially, the long-term benefits often result in cost savings. Efficient websites require less bandwidth and server resources, reducing hosting costs. They also typically perform better in search rankings, potentially reducing your need for paid advertising. Our pricing is competitive with traditional web design services, with the added value of environmental responsibility and performance benefits.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6 py-4 hover:bg-marzipan/10 transition-colors">
                    Can my existing website be made more sustainable?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-700">
                      Absolutely! We offer sustainability audits and optimisation services for existing websites. Common improvements include:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                      <li>Image optimisation and compression</li>
                      <li>Code minification and cleanup</li>
                      <li>Implementing efficient caching strategies</li>
                      <li>Reducing third-party scripts and plugins</li>
                      <li>Migration to green hosting providers</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      These improvements can significantly reduce your website's carbon footprint while improving performance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Sustainable Website?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's create a beautiful, high-performing website that aligns with your values and reduces your environmental impact.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary bg-white text-brandBlue hover:bg-marzipan/90 flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/website-carbon" className="btn-secondary border-white text-white hover:bg-white/10 flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
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

export default SustainableWebDesign;
