import React, { useState } from 'react';
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
import { ProjectData } from '../components/projects/projectsData';

const BenAdams = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Show 3 projects per page
  
  // Featured projects data
  const featuredProjects: ProjectData[] = [
     {
    title: "Sydney Jewish Museum",
    imageUrl: "/jewish-museum-seo.png",
    category: "Cultural Institution",
    description: "Digital marketing, SEO optimisation, and content creation for the Sydney Jewish Museum to share stories of hope, courage, and survival.",
    features: ["Social Media Marketing", "SEO Optimisation", "Content Creation", "Paid Search Management", "Digital Storytelling"],
    color: "bg-[#4A5568]",
    textColor: "text-white",
    slug: "sydney-jewish-museum",
    client: "Sydney Jewish Museum",
    services: ["Digital Marketing", "Content Creation", "SEO Optimisation"],
    websiteUrl: "https://sydneyjewishmuseum.com.au",
    longDescription: "## Project Overview\n\nOne of our favourite new clients has to be the Sydney Jewish Museum. We're proudly supporting their social media marketing, SEO and content creation. Working with cultural spaces has always been in our very foundations as a company. Having been lucky enough to work alongside many of Sydney's finest cultural spaces and places, we were thrilled that SJM got in touch toward the end of 2020.\n\n## The Challenge\n\nThe museum needed to increase their digital presence and reach new audiences in an increasingly digital world. They needed a partner who could navigate the complex cultural narratives while delivering measurable digital growth.\n\n## Our Solution\n\nWe have worked alongside the marketing team to produce amazing digital content for their Instagram Reels, optimise their website for search, and drive memberships and visitation through social media advertising and paid search campaigns on Google and Bing.\n\n### Key Achievements\n\n- In our first 6 months, we demonstrated an average month-on-month rise in organic traffic of around 25%\n- Significant community growth on their two social media platforms\n- Consistent growth in conversion rates on Adword Grants Management and Facebook Business Manager\n\n## Results & Impact\n\nWhat's been amazing is learning the stories here. The real-life tales that showcase the true spirit of human kindness. We're able to tell stories of hope, courage and survival in a way that can resonate with new audiences and inspire change for a new generation.\n\nWe're spreading kindness with our new Reels made for the Be a Mensch movement, sharing Holocaust survivor stories for the first time on their Reels, and handpicking tales from their blog for content ads—stories that inspire acts of kindness and bravery while generating more traffic back to their website, more engagement with their brand and positive brand interactions.\n\n## Conclusion\n\nThe Museum is a must for anyone in the Sydney area, and we highly recommend taking a tour with one of the amazing volunteers, many of whom are direct descendants of survivors and able to retell the human stories of yesterday, giving history a voice for tomorrow.",
    videos: [
      {
        url: "https://vimeo.com/609537392",
        title: "Be a Mensch Campaign",
        description: "Social media campaign highlighting acts of kindness and encouraging community engagement",
        orientation: "landscape"
      },
      {
        url: "https://vimeo.com/577042403",
        title: "Holocaust Survivor Stories",
        description: "Personal testimonies that preserve history for future generations",
        orientation: "landscape"
      },
      {
        url: "https://vimeo.com/609540655",
        title: "Museum Virtual Tour",
        description: "A guided walkthrough of key exhibits and artifacts",
        orientation: "landscape"
      }
    ]
  },
  {
    title: "Jarli – Reach for the stars",
    imageUrl: "/jarli-reach-stars-marzipana.png",
    category: "Indigenous Animation",
    description: "Social media strategy and content creation for an award-winning animated film inspiring Indigenous children to explore STEM and space science.",
    features: ["Social Media Assets", "Digital Content Creation", "Interactive AR Backgrounds", "Campaign Strategy", "Animated GIFs"],
    color: "bg-[#27548E]",
    textColor: "text-white",
    slug: "jarli",
    client: "House of Kitch / Royal Australian Air Force",
    services: ["Social Media Marketing", "Content Creation", "Digital Animation"],
    longDescription: "## Project Overview\n\nIt's not every day you get help on projects that lift you higher, but that's exactly what happened when the House of Kitch invited us to create social media assets for Jarli, an award-winning short film to inspire Indigenous school children to reach for the stars.\n\n## The Challenge\n\nAustralia's sovereign space ambitions require developing a workforce with necessary STEM skills. With the space industry projected to triple in size by 2030, engaging school children, particularly Indigenous youth, and encouraging them to study STEM needs to start now.\n\n## Our Solution\n\nTogether we created digital content assets for Instagram, Facebook and Twitter for the launch of this beautiful animated film. Jarli is a proud Aboriginal girl with a knack for building things, especially things that fly.\n\n### The Film\n\nCreated by the Royal Australian Air Force and UTS_ALA to inspire kids to study STEM subjects and perhaps one day join the RAAF, 'Jarli' weaves visual and oral story elements to explore the dream of flight, indigenous astronomy, and the future of our planet and its people.\n\n### The Creative Team\n\nA talented team of Indigenous creatives included:\n- Co-director: Chantelle Murray\n- Writers: Jonathan Bell & Andrew Dillon\n- Voice actors: Madeleine Madden, Wayne Blair, Mark Coles Smith and Rahmah Bin Buyong\n\n## Our Contribution\n\nMarzipan created a range of social media assets for the film's release, including:\n- Animated GIFs\n- Interactive AR backgrounds for Instagram\n- Social media tiles\n- Campaign strategy and creative direction\n\n## Results & Impact\n\nJarli premiered at the Sydney Film Festival and was pre-screened to Aboriginal children from the Katherine community in outback Northern Territory on RAAF Base Tindal. The film later hitched a ride to the International Space Station on the NASA SpaceX Falcon 9 CRS-24 mission during National Science Week 2022.\n\nChief Defence Scientist, Professor Tanya Monro AC, noted that Jarli struck a chord because of her resilience, creativity and ingenuity—qualities the next generation of Australians need to harness to achieve extraordinary things.\n\n## Personal Connection\n\nProject timing coincided with Marzipan cofounder Ben Adams' experience fostering two young aboriginal children who had faced significant challenges. These kids, despite their experiences, still saw joy and wonder in the world. They loved watching Jarli and enjoyed our social media games, assets and creative that was created for the film.\n\n## Conclusion\n\nProjects born out of love, such as this one, help pave the way toward closing the gap and inspiring the next generation of Indigenous innovators and space explorers.",
    videos: [
      {
        url: "https://youtu.be/YoiijfjK-J8",
        title: "Jarli: Reach for the Stars",
        description: "Award-winning animated film inspiring Indigenous youth to explore STEM and space science",
        orientation: "landscape"
      }
    ]
  },
  
    ]
  }
  ];
  
  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = featuredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
                  src="/marzipan-ben.webp"
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
              <ProjectsGrid 
                projects={currentProjects} 
                currentPage={currentPage}
                projectsPerPage={projectsPerPage}
                totalProjects={featuredProjects.length}
                onPageChange={handlePageChange}
              />
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
