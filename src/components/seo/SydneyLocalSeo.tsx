
import React from 'react';
import { MapPin, Globe, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const sydneyAreas = [
  { name: "Sydney CBD", url: "#sydney-cbd" },
  { name: "Eastern Suburbs", url: "#eastern-suburbs" },
  { name: "North Shore", url: "#north-shore" },
  { name: "Inner West", url: "#inner-west" },
  { name: "Northern Beaches", url: "#northern-beaches" },
  { name: "Western Sydney", url: "#western-sydney" },
];

const serviceTypes = [
  { name: "Sustainable Web Design", url: "/services/sustainable-web-design" },
  { name: "AI-Driven SEO", url: "/services/ai-seo" },
  { name: "Content Creation", url: "/services/content-creation" }
];

const SydneyLocalSeo = () => {
  return (
    <section className="py-16 bg-marzipan/10">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-3">
            Serving Sydney Businesses
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Our sustainable digital solutions are tailored for local Sydney businesses looking to grow their online presence while minimizing environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Sydney Areas We Serve */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-brandBlue mr-2" aria-hidden="true" />
              <h3 className="text-xl font-semibold">Sydney Areas We Serve</h3>
            </div>
            <p className="mb-4 text-foreground/70">
              We provide our sustainable digital services to businesses throughout Greater Sydney, including:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {sydneyAreas.map((area, index) => (
                <li key={index}>
                  <Link 
                    to={area.url}
                    className="flex items-center p-2 hover:bg-marzipan/20 rounded-md transition-colors"
                  >
                    <span className="w-2 h-2 bg-brandBlue rounded-full mr-2"></span>
                    <span>{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-5 pt-5 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-brandBlue mr-2" aria-hidden="true" />
                  <span className="font-medium">Sydney, NSW 2000</span>
                </div>
                <Link 
                  to="/contact" 
                  className="text-sm text-white bg-brandBlue px-4 py-2 rounded-md hover:bg-brandBlue/90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          {/* Local Services */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Search className="h-5 w-5 text-brandBlue mr-2" aria-hidden="true" />
              <h3 className="text-xl font-semibold">Local Sydney Services</h3>
            </div>
            <p className="mb-4 text-foreground/70">
              Our specialized services for Sydney businesses help you stand out in the local market:
            </p>
            
            <div className="space-y-4">
              {serviceTypes.map((service, index) => (
                <div key={index} className="p-3 border border-gray-100 rounded-md hover:border-brandBlue/30 transition-colors">
                  <Link to={service.url} className="block">
                    <h4 className="font-medium">{service.name} in Sydney</h4>
                    <p className="text-sm text-foreground/60 mt-1">
                      {service.name === "Sustainable Web Design" 
                        ? "Eco-friendly websites designed specifically for Sydney businesses"
                        : service.name === "AI-Driven SEO" 
                          ? "Local SEO strategies targeting Sydney audiences"
                          : "Engaging content that resonates with Sydney customers"}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-5 text-center">
              <Link 
                to="/services" 
                className="inline-flex items-center text-brandBlue hover:text-brandBlue/80 transition-colors"
              >
                View all Sydney services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Sydney SEO Testimonial */}
        <div className="mt-10 bg-gradient-to-r from-brandBlue/10 to-marzipan/10 p-6 rounded-lg">
          <blockquote className="italic text-foreground/80">
            "Marzipan Digital transformed our online presence with their sustainable web design approach. As a Sydney-based business, we've seen significant improvement in our local search rankings and customer engagement."
          </blockquote>
          <div className="mt-3 font-medium">— Local Sydney Business Owner</div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-foreground/70 mb-5">
            Looking to improve your Sydney business's online visibility?
          </p>
          <Link
            to="/contact"
            className="bg-brandBlue hover:bg-brandBlue/90 text-white px-6 py-3 rounded-md transition-colors inline-block"
          >
            Get a Free SEO Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SydneyLocalSeo;
