
import React, { useState } from 'react';
import ProjectsGrid from '../projects/ProjectsGrid';
import { ProjectData } from '../projects/projectsData';

const FeaturedProjects = () => {
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

  return (
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
  );
};

export default FeaturedProjects;
