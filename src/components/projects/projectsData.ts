export interface ProjectData {
  title: string;
  category: string;
  description: string;
  features: string[];
  color: string;
  textColor: string;
  slug: string;
  imageUrl?: string;
  client?: string;
  services?: string[];
  websiteUrl?: string;
  longDescription?: string;
  videos?: string[];
}

export const projects: ProjectData[] = [
  {
    title: "Sydney Jewish Museum",
    category: "Cultural Institution",
    description: "Digital marketing, SEO optimisation, and content creation for the Sydney Jewish Museum to share stories of hope, courage, and survival.",
    features: ["Social Media Marketing", "SEO Optimisation", "Content Creation", "Paid Search Management", "Digital Storytelling"],
    color: "bg-[#4A5568]",
    textColor: "text-white",
    slug: "sydney-jewish-museum",
    client: "Sydney Jewish Museum",
    services: ["Digital Marketing", "Content Creation", "SEO Optimisation"],
    websiteUrl: "https://sydneyjewishmuseum.com.au",
    longDescription: "One of our favourite new clients has to be the Sydney Jewish Museum. We're proudly supporting their social media marketing, SEO and content creation. Working with cultural spaces has always been in our very foundations as a company. Having been lucky enough to work alongside many of Sydney's finest cultural spaces and places, we were thrilled that SJM got in touch toward the end of 2020.\n\nSince then, we have worked alongside the marketing team to produce amazing digital content for their Instagram Reels, optimise their website for search, and drive memberships and visitation through social media advertising and paid search campaigns on Google and Bing. In our first 6 months, we have been able to demonstrate an average month-on-month rise in organic traffic of around 25%.\n\nCommunity growth on their two social media platforms has also been high, and our conversion rates on Adword Grants Management and Facebook Business Manager have shown consistent growth.\n\nBut that's not why we love it. That's what we do for most of our clients!\n\nWhat's been amazing is learning the stories here. The real-life tales that are often showcasing the true spirit of human kindness. We're able to tell stories of hope, courage and survival in a way that can resonate with new audiences and inspire change for a new generation. We're spreading kindness with our new Reels made for the Be a Mensch movement, and for the museum, we're sharing Holocaust survivor stories for the first time on their Reels, and we're handpicking tales from their blog for content ads. Tales that inspire acts of kindness and bravery while at the same time being able to generate more traffic back to their website, more engagement with their brand and positive brand interactions.\n\nThe Museum is a must for anyone in the Sydney area, and we highly recommend taking a tour with one of the amazing volunteers, many of whom are direct descendants of survivors and able to retell the human stories of yesterday, giving history a voice for tomorrow.",
    videos: [
      "https://vimeo.com/609537392",
      "https://vimeo.com/577042403",
      "https://vimeo.com/609540655"
    ]
  },
  {
    title: "EcoLiving Collective",
    category: "Sustainable E-commerce",
    description: "A carbon-neutral online store for eco-friendly home products with optimized images and minimal server requests.",
    features: ["90% lighter than average e-commerce sites", "Green hosting", "Optimized checkout flow"],
    color: "bg-[#C8D6AF]",
    textColor: "text-foreground",
    slug: "ecoliving-collective",
    imageUrl: "/ecoliving-project.jpg",
    services: ["Sustainable Web Design", "E-commerce Development", "SEO Optimization"]
  },
  {
    title: "Ocean Conservation Alliance",
    category: "Non-profit Organization",
    description: "Accessible, lightweight website showcasing the organization's impact with text-based storytelling instead of heavy media.",
    features: ["Static site generation", "Text-focused content strategy", "Offline capability"],
    color: "bg-brandBlue",
    textColor: "text-white",
    slug: "ocean-conservation-alliance",
    imageUrl: "/ocean-project.jpg",
    services: ["Sustainable Web Design", "Content Strategy", "Accessibility Optimization"]
  },
  {
    title: "Mindful Markets",
    category: "Ethical Marketplace",
    description: "A progressive web app connecting conscious consumers with sustainable local businesses.",
    features: ["Geo-location services", "Low-bandwidth image strategy", "Progressive loading"],
    color: "bg-marzipan",
    textColor: "text-foreground",
    slug: "mindful-markets",
    imageUrl: "/mindful-project.jpg",
    services: ["Progressive Web App", "Marketplace Development", "Performance Optimization"]
  },
  {
    title: "GreenTech Solutions",
    category: "Technology Company",
    description: "Corporate website with sustainability reporting dashboard and minimal animation energy usage.",
    features: ["Performance-optimized animations", "Dark mode by default", "Low-energy design patterns"],
    color: "bg-[#73A580]",
    textColor: "text-white",
    slug: "greentech-solutions"
  },
  {
    title: "Urban Farming Initiative",
    category: "Community Project",
    description: "Community-focused platform with offline-first approach for low-income area accessibility.",
    features: ["Works without JavaScript", "Minimal dependency architecture", "Print-friendly resources"],
    color: "bg-brandRed",
    textColor: "text-white",
    slug: "urban-farming-initiative"
  },
  {
    title: "Sustainable Fashion Collective",
    category: "Fashion Brand",
    description: "Image-focused site with optimal compression and lazy loading to minimize environmental impact.",
    features: ["Next-gen image formats", "Selective loading strategy", "Green hosting"],
    color: "bg-[#E6CCAE]",
    textColor: "text-foreground",
    slug: "sustainable-fashion-collective"
  }
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Sustainability Audit",
    description: "We assess your current digital footprint and identify opportunities for sustainable improvements."
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "We create a roadmap for your digital presence that balances business goals with environmental responsibility."
  },
  {
    step: "03",
    title: "Eco-Friendly Design",
    description: "Our designs minimize resource usage while creating beautiful, effective user experiences."
  },
  {
    step: "04",
    title: "Efficient Development",
    description: "Clean, optimized code ensures your website runs as efficiently as possible."
  },
  {
    step: "05",
    title: "Green Hosting Setup",
    description: "We configure your site on renewable-powered hosting providers with optimal caching."
  },
  {
    step: "06",
    title: "Continuous Optimization",
    description: "Regular audits and improvements to maintain and enhance sustainability over time."
  }
];
