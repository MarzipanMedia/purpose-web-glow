
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
    title: "Jarli – Reach for the Stars",
    category: "Indigenous Animation",
    description: "Social media strategy and content creation for an award-winning animated film inspiring Indigenous children to explore STEM and space science.",
    features: ["Social Media Assets", "Digital Content Creation", "Interactive AR Backgrounds", "Campaign Strategy", "Animated GIFs"],
    color: "bg-[#27548E]",
    textColor: "text-white",
    slug: "jarli",
    client: "House of Kitch / Royal Australian Air Force",
    services: ["Social Media Marketing", "Content Creation", "Digital Animation"],
    longDescription: "It's not every day you get help on projects that lift you higher, but that's exactly what happened when the House of Kitch invited us to create social media assets for Jarli, an award-winning short film to inspire Indigenous school children to reach for the stars. Together we created digital content assets for Instagram, Facebook and Twitter for the launch of this beautiful animated film.\n\nJarli is a proud Aboriginal girl with a knack for building things, especially things that fly. Created by the Royal Australian Air Force and UTS_ALA to inspire our kids to study STEM subjects and perhaps one day join the RAAF. 'Jarli' is another animation gem that weaves visual and oral story elements to explore the dream of flight, indigenous astronomy, and the future of our planet and its people. Jarli, 16, lives with her family in a remote community in Australia. She might look small, but she asks big questions and has big ideas. She also has a knack for building things – especially things that fly – and wants to fly herself one day… maybe even into outer space. Jarli dreams of being the first person to travel to other worlds in our solar system.\n\nDirected by Simon Rippingale, the inspirational animated short is a collaboration with First Nations storytellers, the UTS Animal Logic Academy in collaboration with the Royal Australian Air Force and Like a Photon Creative. The goal was to inspire young people (particularly girls, especially indigenous kids) to reach for the stars and widen their eyes to possibilities opened up by STEM.\n\nA critical element for Australia to achieve its sovereign space ambitions is the development of a workforce with the necessary STEM skills. With the space industry tripling in size by 2030, engagement with school kids, and encouraging them to study STEM, needs to start now.\n\nA talented team of Indigenous creatives included co-director: Chantelle Murray, writers: Jonathan Bell & Andrew Dillon and voice actors: Madeleine Madden, Wayne Blair, Mark Coles Smith and Rahmah Bin Buyong. Simon Rippingale co-directed Jarli as part of his PHD thesis under Professor Andrew Johnston.\n\nWhile the Jarli film premiered at the Sydney Film Festival, Jarli was pre-screened to a very special audience of Aboriginal children from the Katherine community in outback Northern Territory on RAAF Base Tindal. Audience members were treated to a unique pop-up cinema experience in an open aircraft hangar and a view of the night-flying activity at Tindal.\n\nProject timings are always a curious thing, and this one landed just after a short stint of fostering by Marzipan cofounder and digital guy, Ben Adams who looked after two young aboriginal children. These kids had seen some of the worst things imaginable and yet were able to still see the joy and wonder of the world, without bitterness or judgement. There are so many systemic barriers in the way of closing the gap but we're certain projects born out of love, such as this one, may help pave the way. They loved watched Jarli and enjoyed our social media games, assets and creative that was created for the film.\n\nMarzipan have created a range of social media tiles for its full release, including animated gifs, interactive AR backgrounds for Instagram and more.\n\nNot ready to stay on the ground too long, Jarli hitched a ride to the International Space Station on the NASA SpaceX Falcon 9 CRS-24 mission during National Science Week 2022. Chief Defence Scientist, Professor Tanya Monro AC said Jarli struck a chord with all of us because of her resilience, creativity and ingenuity – the qualities the next generation of Australians need to harness to achieve extraordinary things.\n\n"It is so inspiring for Australian children, particularly First Nations children, to see clever Australian inventions driving collaboration with the US Space Force and NASA… We can't confirm this but are certain the NASA folks would have loved playing with our Instagram AR tiles ; )",
    videos: [
      "https://youtu.be/YoiijfjK-J8"
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
