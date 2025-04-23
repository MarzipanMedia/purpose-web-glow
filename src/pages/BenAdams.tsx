import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaHead from '@/components/MetaHead';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import CTASection from '../components/projects/CTASection';
import ClientLogos from '../components/ClientLogos';
import { Link } from 'react-router-dom';
import BookGrid from '../components/books/BookGrid';

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

  // Sample books (replace these with your Amazon affiliate links + preferred books later)
  const books = [
    {
      title: "How Bad Are Bananas?",
      author: "Mike Berners-Lee",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://www.amazon.co.uk/How-Bad-Are-Bananas-Carbon/dp/1788163816?tag=youraffiliatetag-21",
      blurb: "A practical, witty guide to the real carbon footprints of everything from emails to bananas—essential reading for the eco-conscious.",
    },
    {
      title: "The Future We Choose",
      author: "Christiana Figueres & Tom Rivett-Carnac",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://www.amazon.co.uk/Future-We-Choose-Surviving-Crisis/dp/1786580364?tag=youraffiliatetag-21",
      blurb: "Optimism and real-world solutions from the architects of the Paris Agreement—how to tackle climate change together.",
    },
    {
      title: "Net Zero: How We Stop Causing Climate Change",
      author: "Dieter Helm",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "https://www.amazon.co.uk/Net-Zero-Stop-Causing-Climate/dp/000840449X?tag=youraffiliatetag-21",
      blurb: "Helm’s straight-talking, expert vision for cutting carbon emissions in Britain and beyond.",
    },
    {
      title: "Digital Minimalism",
      author: "Cal Newport",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      link: "https://www.amazon.co.uk/Digital-Minimalism-Choosing-Focused-Noisy/dp/024145357X?tag=youraffiliatetag-21",
      blurb: "How to reclaim your attention and create a more intentional, sustainable relationship with technology.",
    },
    {
      title: "Designing for Sustainability",
      author: "Tim Frick",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "https://www.amazon.co.uk/Designing-Sustainability-Intentional-Technology-Ecology/dp/1491920172?tag=youraffiliatetag-21",
      blurb: "The definitive book for sustainable web practitioners—eco-friendly design and digital best practices.",
    },
    {
      title: "The Day the World Stops Shopping",
      author: "JB MacKinnon",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://www.amazon.co.uk/Day-World-Stops-Shopping-Possibilities/dp/178816510X?tag=youraffiliatetag-21",
      blurb: "A thought experiment on conscious consumption—what would really happen if we all bought less?",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Ben Adams | Co-Founder & Technical Director at Marzipan Media"
        description="Meet Ben Adams, Co-Founder and Technical Director at Marzipan Media, leading sustainable web development and technical innovation."
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with contrasting background */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
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
          </div>
        </section>

        {/* Bio Section with different background */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose dark:prose-invert max-w-none">
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
            </div>
          </div>
        </section>

        {/* Featured Projects Section with contrasting background */}
        <section className="py-20 bg-marzipan/10 dark:bg-gray-900/50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-semibold mb-8 text-center">Featured Projects</h2>
              <ProjectsGrid projects={featuredProjects} />
            </div>
          </div>
        </section>

        {/* CTA Section with different background */}
        <section className="py-20 bg-brandBlue text-white">
          <div className="container-custom">
            <CTASection 
              title="Want to learn more about sustainable web development?"
              subtitle="Explore our collection of free resources and ebooks on creating environmentally conscious digital solutions."
              showResourceLink={true}
            />
          </div>
        </section>

        {/* Friends with Benefits Section with contrasting background */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-semibold mb-8 text-center">Friends with Benefits</h2>
              <ClientLogos />
            </div>
          </div>
        </section>

        {/* Books I'm Currently Reading */}
        <section
          className="py-20"
          style={{
            background:
              "linear-gradient(90deg, #fdfcfb 0%, #e2d1c3 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            aria-hidden="true"
            style={{
              background: "linear-gradient(0deg, rgba(186,230,253,0.15) 50%, rgba(203,213,225,0.25) 100%)",
              opacity: 0.85,
              transition: "opacity 0.4s",
            }}
          ></div>
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-display font-semibold mb-8 text-center gradient-text">Books I'm Currently Reading</h2>
              <BookGrid books={books} />
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default BenAdams;
