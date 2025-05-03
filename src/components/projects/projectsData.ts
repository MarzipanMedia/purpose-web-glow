export interface VideoData {
  url: string;
  title: string;
  description?: string;
  orientation?: 'landscape' | 'portrait';  // Default to landscape if not specified
}

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
  videos?: VideoData[];
  date?: string;
  tags?: string[];
}

export const projects: ProjectData[] = [
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
        orientation: "portrait"
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
  {
    title: "Royal Botanic Garden – A Living Digital Archive",
    imageUrl: "/jarli-reach-stars-marzipana.png", 
    category: "Cultural Institution",
    description: "Website, video, and app creation for Australia's oldest scientific institution and public garden.",
    features: [
      "Website Redesign",
      "Video Content Creation",
      "Photography",
      "Wayfinding App",
      "Digital Strategy",
      "Stakeholder Management"
    ],
    color: "bg-[#186074]",
    textColor: "text-white",
    slug: "royal-botanic-garden",
    client: "Royal Botanic Garden Sydney",
    services: [
      "Web Design",
      "Project Management",
      "Digital Content Creation",
      "Video Production",
      "App Development",
      "SEO",
      "Stakeholder Engagement"
    ],
    longDescription: "## Project Overview\n\nIt was an honour to lead the digital transformation of the Royal Botanic Garden in Sydney – Australia's oldest scientific institution and a beloved public garden in the heart of the city.\n\n## The Challenge\n\nWith an outdated CMS, deteriorating UX, and poor accessibility, the Garden's online presence no longer reflected its importance. The site needed to match the beauty and significance of this 200-year-old institution.\n\n## Our Solution\n\nMarzipan Media, prequalified under the NSW SCM2701 scheme, stepped in to deliver a complete overhaul. For over six years, we've supported the Garden across social media, SEO, video production, and digital strategy.\n\nIn 2017, we worked in-house to lead a full website redevelopment across the Garden and its four sister sites, managing everything from:\n- Initial brief creation and tendering\n- Supplier coordination\n- Content strategy\n- User experience design\n- Implementation oversight\n- Testing and quality assurance\n- Go-live management\n\n## Key Deliverables\n\n- Content-first, image-led website with enhanced accessibility\n- Mobile responsive design optimized for visitors using the site while at the gardens\n- Rich storytelling tools to showcase the Garden's history and significance\n- Photography and drone footage capturing the Garden's beauty\n- Video production highlighting events and behind-the-scenes staff stories\n\n## Results & Impact\n\nThe result was the first time in the Garden's 200-year history that its digital presence truly matched the magic of its physical space. Our content creation strategy included work still seen throughout the Garden today, with highlights including video showcases of:\n- The Vivid Event\n- The Calyx building\n- The passionate staff behind the scenes\n\n## Ongoing Partnership\n\nOur journey continues with:\n- CRM integrations (Salesforce)\n- Team training and capability building\n- Ongoing digital strategy and support\n\n## Conclusion\n\nThrough thoughtful digital transformation, we've helped the Garden bloom online just as beautifully as it does in real life, preserving its legacy while making it accessible to new generations of visitors and plant enthusiasts.",
    videos: [
      {
        url: "https://youtu.be/wZihT4gxvkA",
        title: "The Calyx: Garden of Wonder",
        description: "Showcase of the Garden's newest architectural marvel and exhibition space",
        orientation: "landscape"
      },
      {
        url: "https://youtu.be/ezuDrxkn2C0",
        title: "Behind the Scenes: Garden Experts",
        description: "Meet the passionate staff who maintain Australia's oldest botanical collection",
        orientation: "portrait"
      }
    ]
  },
  {
    title: "Willow – A Safe, Fast, and Sustainable Website for Women in Crisis",
    category: "Social Impact",
    description: "Mobile-first website providing legal info for women facing crisis — fast, safe, and discreet.",
    features: [
      "0.46g CO₂ per View",
      "Safe Exit & History Clearing",
      "Mobile-First Design",
      "Low Literacy UX",
      "Trauma-Aware UI"
    ],
    color: "bg-[#564872]",
    textColor: "text-white",
    slug: "willow",
    client: "Women's Legal Service NSW",
    services: [
      "Web Design",
      "UX/UI Strategy",
      "Sustainable Development",
      "Accessibility Design",
      "Digital Strategy"
    ],
    imageUrl: "/willow-webdesign-logo.png",
    longDescription: "## Project Overview\n\nWillow.org.au is one of Marzipan Media's most meaningful digital projects — a mobile-first microsite designed to provide legal information for women escaping violence or facing crisis.\n\n## The Challenge\n\nWomen in crisis situations often need immediate access to legal information under difficult circumstances — using shared devices, on slow connections, or with limited time and privacy. The solution needed to be fast, discreet, and accessible to users with low literacy or limited digital access.\n\n## Our Solution\n\nCommissioned by Women's Legal Service NSW and funded through state grants and community partnerships, Willow is a discreet and accessible WordPress site with specialized features for crisis situations.\n\n### Key Features\n\n- Safe Exit buttons for covert browsing\n- Automatic browser clearing to protect user history\n- Ultra-lightweight design prioritizing speed and safety\n- Low-literacy interface with clear, direct language\n- Optimized for slow 3G connections in rural NSW\n\n## Design Approach\n\nCollaboratively designed by women, the site's visual language — inspired by the resilience and flexibility of the willow tree — brings softness and strength to difficult content. The interface is calming, while remaining clear and direct.\n\n## Sustainability Impact\n\nWillow isn't only a lifeline — it's a model of Sustainable Web Design:\n- Emits just 0.46g of CO₂ per page view\n- Cleaner than over 50% of all websites globally\n- Lightweight design with reduced scripts and optimized assets\n\n## Results & Impact\n\nThe site provides critical information to women in need while demonstrating that crisis resources can be both effective and environmentally responsible. It serves as an ethical digital solution in both form and function.\n\n## Conclusion\n\nWillow represents our commitment to creating technology that serves vulnerable communities while respecting both users and the planet. It shows how thoughtful digital design can address critical social needs without unnecessary environmental impact.",
    videos: []
  },
  {
    title: "Popology – A Bold Website That Balances Beauty, Speed, and Sustainability",
    category: "Creative Agency",
    description: "High-performance website build for experiential agency Popology, blending stunning design with low carbon impact.",
    features: [
      "Ultra-Fast Load Speeds",
      "Low Carbon Footprint",
      "Dynamic Project Showcases",
      "Sustainable Development",
      "Interactive Page Transitions"
    ],
    color: "bg-[#AE2012]",
    textColor: "text-white",
    slug: "popology",
    client: "Popology",
    services: [
      "Web Development",
      "Performance Optimisation",
      "Sustainable Web Design",
      "Technical Consulting"
    ],
    imageUrl: "/popology-webdesign-logo.png",
    longDescription: "## Project Overview\n\nWhen experiential agency Popology needed a high-impact website to match their creative edge, they turned to longtime collaborators Marzipan Media to bring the vision to life — merging stunning design with world-class performance.\n\n## The Challenge\n\nPopology needed a digital presence that would showcase their creative work without compromising on performance or sustainability values. The site needed to be visually striking while maintaining exceptional speed and minimal environmental impact.\n\n## Our Solution\n\nTogether, we created popology.com.au — a website that loads fast, looks phenomenal, and reflects both agencies' shared values of innovation and sustainability.\n\n### Collaborative Approach\n\nPopology led the creative direction — crafting a playful, immersive design that captures the energy of their brand experiences. Marzipan took that concept and brought it to life through a modern, ultra-lightweight build designed for speed and user engagement.\n\n### Technical Implementation\n\n- Modern, efficient codebase with minimal dependencies\n- Optimized images and assets\n- Strategic performance enhancements\n- Renewable-powered hosting configuration\n- Caching and compression optimization\n\n## Key Features\n\n- Interactive page transitions that maintain performance\n- Dynamic project showcases with minimal load impact\n- Mobile-first, responsive design\n- Cutting-edge animation with minimal JavaScript\n\n## Results & Impact\n\nFrom page transitions to dynamic project showcases, the result is an interactive site that invites exploration — with lightning-fast load times and near-invisible code. The project proves you don't have to sacrifice creativity to be climate-conscious.\n\n## Conclusion\n\nBuilt on cutting-edge tech, optimized for mobile, and incredibly lightweight, Popology's website is a model for how sustainable sites should be built — beautiful, efficient, and future-ready. It demonstrates our commitment to creating digital experiences that balance visual impact with environmental responsibility.",
    videos: []
  },
  {
    title: "Toasty",
    imageUrl: "/toasty-seo-support.png",
    category: "Outdoor Apparel",
    description: "SEO optimisation and performance improvements for a small business specialising in weatherproof jackets, boosting their visibility and online presence.",
    features: ["Mobile Site Speed Improvement", "Domain Authority Growth", "Keyword Ranking Boost", "SEO Score Enhancement", "Checkout Process Optimisation"],
    color: "bg-[#E67E22]",
    textColor: "text-white",
    slug: "toasty",
    client: "Toasty",
    services: ["SEO Optimisation", "Performance Enhancement", "Digital Marketing"],
    date: "Nov 2024",
    tags: ["SEO", "Digital Marketing", "Small Business"],
    longDescription: "## Project Overview\n\nSmall businesses are the backbone of innovation, but standing out in today's competitive digital space can be a challenge. At Marzipan Media, we specialise in helping purpose-driven brands like Toasty, creators of the Ultimate Weatherproof Jacket, achieve their digital goals through strategic SEO.\n\n## The Challenge\n\nThis was quite a personal story with Toasty. They had a fantastic product – a jacket designed to withstand the harshest outdoor conditions – but when our Marzipan founder, Ben tried to purchase one online, he noticed the website may be holding them back from a speedy checkout process. Additionally, their digital visibility was limiting their reach.\n\nLike many new businesses with freshly launched websites, Toasty was starting from ground zero with their SEO, and their mobile site performance needed significant improvement to compete in today's mobile-first world.\n\n### Key Areas of Focus\n\n- Improving mobile site speed to enhance user experience\n- Building domain authority to establish trust and visibility\n- Increasing rankings for high-value keywords and phrases\n- Ironing out checkout process and email deliverability\n- Boosting their overall SEO score to improve discoverability\n\n## Our Solution\n\nWe implemented a targeted SEO strategy focused on both technical improvements and content optimization:\n\n- Mobile performance optimization\n- Strategic keyword targeting\n- Technical SEO fixes\n- Checkout process streamlining\n- Domain authority building\n\n## Results & Impact\n\nOver the course of the SEO sprint, we delivered tangible results that positioned Toasty for long-term success:\n\n### Mobile Site Speed\n- Improved their mobile site speed by 30%, ensuring users could navigate their site quickly and efficiently – a crucial factor for both user satisfaction and Google rankings\n\n### Domain Authority\n- Increased Toasty's domain authority from 1 to 8, laying the foundation for better rankings and greater trust from search engines\n\n### Keyword Rankings\n- By optimizing content and targeting strategic keywords, we lifted a large number of key phrases an average of 12 places in search engine rankings\n\n### Overall SEO Score\n- Using tools like SEOability, we took their SEO score from 59 to 82, a significant leap that reflects their improved optimisation and readiness to compete in the market\n\n## Why SEO Is Essential for Small Businesses\n\nOur work with Toasty underscores the importance of ongoing SEO for small businesses:\n\n- **Visibility and Discoverability**: Ranking higher on search engines means being seen by the right people at the right time\n- **Building Credibility**: A strong domain authority signals to customers that Toasty is a reliable, established brand\n- **Long-Term Benefits**: Unlike short-term advertising campaigns, SEO offers sustainable growth\n- **Improved User Experience**: Enhancing mobile site speed and optimising the site layout not only improves rankings but also keeps users engaged\n\n## Conclusion\n\nOur partnership with Toasty demonstrates the power of a well-executed SEO strategy. From technical improvements to keyword optimisation, every step we took was designed to position them as leaders in their industry. And while the results speak for themselves, this is only the beginning of Toasty's journey to becoming a household name in outdoor gear."
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
