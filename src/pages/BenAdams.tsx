
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaHead from '../components/MetaHead';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import CTASection from '../components/projects/CTASection';
import ClientLogos from '../components/ClientLogos';
import { Link } from 'react-router-dom';

const BenAdams = () => {
  // Featured projects data
  const featuredProjects = [
    {
      title: "EcoLiving Collective",
      category: "Sustainable E-commerce",
      description: "A carbon-neutral online store with optimised images and minimal server requests.",
      features: ["98% Performance Score", "Green Hosting", "Image Optimization"],
      color: "bg-brandBlue",
      textColor: "text-white",
      slug: "ecoliving-collective"
    },
    {
      title: "Ocean Conservation Alliance",
      category: "Non-profit Organisation",
      description: "Accessible, lightweight website showcasing marine conservation efforts.",
      features: ["Sustainable Design", "Low Carbon", "High Performance"],
      color: "bg-marzipan/80",
      textColor: "text-foreground",
      slug: "ocean-conservation"
    },
    {
      title: "Mindful Markets",
      category: "Digital Marketplace",
      description: "Progressive web app connecting conscious consumers with sustainable businesses.",
      features: ["PWA", "Optimised Code", "Eco Hosting"],
      color: "bg-brandRed",
      textColor: "text-white",
      slug: "mindful-markets"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Ben Adams | Co-Founder & Technical Director at Marzipan Media"
        description="Meet Ben Adams, Co-Founder and Technical Director at Marzipan Media, leading sustainable web development and technical innovation."
      />
      
      <Header />
      
      <main className="flex-grow">
        <div className="container-custom py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section with larger image */}
            <div className="mb-16">
              <div className="aspect-square w-full max-w-xl mx-auto mb-8 rounded-2xl overflow-hidden bg-marzipan/20">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Ben Adams" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl font-display font-semibold mb-4">Ben Adams</h1>
                <p className="text-xl text-brandBlue dark:text-marzipan mb-4">Co-Founder & Technical Director</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://linkedin.com/in/benadams" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:benadams@marzipan.com.au"
                    className="inline-flex items-center gap-2 text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="prose dark:prose-invert max-w-none mb-20">
              <p className="text-lg leading-relaxed mb-6">
                As Co-Founder and Technical Director at Marzipan Media, Ben Adams brings a wealth of experience in sustainable web development and technical innovation. With a keen focus on environmental consciousness, Ben leads our technical strategy to create digital solutions that are both powerful and planet-friendly.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Ben's expertise in sustainable web development has been instrumental in shaping Marzipan's approach to creating environmentally responsible digital solutions. He ensures that our technical implementations not only meet the highest standards of performance but also maintain minimal environmental impact.
              </p>

              <p className="text-lg leading-relaxed">
                Working alongside co-founder Ben Thompson, Ben Adams helps drive Marzipan's mission to revolutionise digital marketing through sustainable practices and innovative technical solutions. His leadership in implementing eco-friendly web development practices has established Marzipan as a pioneer in sustainable digital solutions.
              </p>
            </div>

            {/* Featured Projects Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-display font-semibold mb-8 text-center">Featured Projects</h2>
              <ProjectsGrid projects={featuredProjects} />
            </div>

            {/* CTA Section */}
            <CTASection 
              title="Want to learn more about sustainable web development?"
              subtitle="Explore our collection of free resources and ebooks on creating environmentally conscious digital solutions."
              showResourceLink={true}
            />

            {/* Friends with Benefits Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-display font-semibold mb-8 text-center">Friends with Benefits</h2>
              <ClientLogos />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BenAdams;
