
export interface ProjectData {
  title: string;
  category: string;
  description: string;
  features: string[];
  color: string;
  textColor: string;
}

export const projects: ProjectData[] = [
  {
    title: "EcoLiving Collective",
    category: "Sustainable E-commerce",
    description: "A carbon-neutral online store for eco-friendly home products with optimized images and minimal server requests.",
    features: ["90% lighter than average e-commerce sites", "Green hosting", "Optimized checkout flow"],
    color: "bg-[#C8D6AF]",
    textColor: "text-foreground"
  },
  {
    title: "Ocean Conservation Alliance",
    category: "Non-profit Organization",
    description: "Accessible, lightweight website showcasing the organization's impact with text-based storytelling instead of heavy media.",
    features: ["Static site generation", "Text-focused content strategy", "Offline capability"],
    color: "bg-brandBlue",
    textColor: "text-white"
  },
  {
    title: "Mindful Markets",
    category: "Ethical Marketplace",
    description: "A progressive web app connecting conscious consumers with sustainable local businesses.",
    features: ["Geo-location services", "Low-bandwidth image strategy", "Progressive loading"],
    color: "bg-marzipan",
    textColor: "text-foreground"
  },
  {
    title: "GreenTech Solutions",
    category: "Technology Company",
    description: "Corporate website with sustainability reporting dashboard and minimal animation energy usage.",
    features: ["Performance-optimized animations", "Dark mode by default", "Low-energy design patterns"],
    color: "bg-[#73A580]",
    textColor: "text-white"
  },
  {
    title: "Urban Farming Initiative",
    category: "Community Project",
    description: "Community-focused platform with offline-first approach for low-income area accessibility.",
    features: ["Works without JavaScript", "Minimal dependency architecture", "Print-friendly resources"],
    color: "bg-brandRed",
    textColor: "text-white"
  },
  {
    title: "Sustainable Fashion Collective",
    category: "Fashion Brand",
    description: "Image-focused site with optimal compression and lazy loading to minimize environmental impact.",
    features: ["Next-gen image formats", "Selective loading strategy", "Green hosting"],
    color: "bg-[#E6CCAE]",
    textColor: "text-foreground"
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
