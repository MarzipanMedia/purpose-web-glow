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
  videos?: (string | VideoData)[];
  date?: string;
  tags?: string[];
}

interface VideoData {
  url: string;
  title: string;
  description?: string;
  orientation?: 'landscape' | 'portrait';
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
    longDescription: "One of our favourite new clients has to be the Sydney Jewish Museum. We're proudly supporting their social media marketing, SEO and content creation. Working with cultural spaces has always been in our very foundations as a company. Having been lucky enough to work alongside many of Sydney's finest cultural spaces and places, we were thrilled that SJM got in touch toward the end of 2020.\n\nSince then, we have worked alongside the marketing team to produce amazing digital content for their Instagram Reels, optimise their website for search, and drive memberships and visitation through social media advertising and paid search campaigns on Google and Bing. In our first 6 months, we have been able to demonstrate an average month-on-month rise in organic traffic of around 25%.\n\nCommunity growth on their two social media platforms has also been high, and our conversion rates on Adword Grants Management and Facebook Business Manager have shown consistent growth.\n\nBut that's not why we love it. That's what we do for most of our clients!\n\nWhat's been amazing is learning the stories here. The real-life tales that are often showcasing the true spirit of human kindness. We're able to tell stories of hope, courage and survival in a way that can resonate with new audiences and inspire change for a new generation. We're spreading kindness with our new Reels made for the Be a Mensch movement, and for the museum, we're sharing Holocaust survivor stories for the first time on their Reels, and we're handpicking tales from their blog for content ads. Tales that inspire acts of kindness and bravery while at the same time being able to generate more traffic back to their website, more engagement with their brand and positive brand interactions.\n\nThe Museum is a must for anyone in the Sydney area, and we highly recommend taking a tour with one of the amazing volunteers, many of whom are direct descendants of survivors and able to retell the human stories of yesterday, giving history a voice for tomorrow.",
    videos: [
      {
        url: "https://vimeo.com/609537392",
        title: "Sydney Jewish Museum - Stories of Hope",
        description: "Sharing stories of courage and survival",
        orientation: 'portrait'
      },
      {
        url: "https://vimeo.com/577042403",
        title: "Be a Mensch Campaign",
        description: "Spreading kindness and understanding",
        orientation: 'portrait'
      },
      {
        url: "https://vimeo.com/609540655",
        title: "Holocaust Survivor Stories",
        description: "Preserving memories for future generations",
        orientation: 'portrait'
      }
    ]
  },
  {
    title: "Willow – A Safe, Fast, and Sustainable Website for Women in Crisis",
    imageUrl: "/willow-womens-sustainable-website.webp",
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
    longDescription: "Willow.org.au is one of Marzipan Media's most meaningful digital projects — a mobile-first microsite designed to provide legal information for women escaping violence or facing crisis.\n\nThe Challenge\n\nWomen facing crisis situations often need quick, discreet access to legal resources. Many have limited digital access, low literacy levels, or restricted internet freedom. The challenge was to create a website that would be both accessible and secure for users in vulnerable situations.\n\nOur Solution\n\nCommissioned by Women's Legal Service NSW and funded through state grants and community partnerships, we developed Willow as a discreet and accessible WordPress site.\n\nKey Features:\n\n• Safe Exit buttons for covert browsing\n• Automatic browser clearing to protect user history\n• Ultra-lightweight design to prioritise speed and safety\n• Mobile-first architecture for accessibility\n• Low-bandwidth optimization for 3G connections\n\nDesign Approach\n\nCollaboratively designed by women, the site's visual language draws inspiration from the resilience and flexibility of the willow tree. This brings a balance of softness and strength to difficult content, creating an interface that is both calming and clear.\n\nTechnical Implementation\n\nFrom the beginning, Willow was engineered for real-world conditions:\n\n• Optimized for slow networks and shared devices\n• Built for urgent, time-sensitive access\n• Designed with privacy and security in mind\n• Developed for maximum compatibility\n\nEnvironmental Impact\n\nWillow is not only a lifeline — it's a model of Sustainable Web Design:\n\n• Emits just 0.46g of CO₂ per page view\n• Cleaner than 50% of global websites\n• Uses lightweight design principles\n• Minimizes script usage\n• Implements optimized assets\n\nThis makes it an ethical choice in both form and function, serving its social mission while minimizing environmental impact.",
    videos: []
  },
  {
  "title": "Popology – A Bold Website That Balances Beauty, Speed, and Sustainability",
  "category": "Creative Agency",
  "description": "High-performance website build for experiential agency Popology, blending stunning design with low carbon impact.",
  "features": [
    "Ultra-Fast Load Speeds",
    "Low Carbon Footprint",
    "Dynamic Project Showcases",
    "Sustainable Development",
    "Interactive Page Transitions"
  ],
  "color": "bg-[#AE2012]",
  "textColor": "text-white",
  "slug": "popology",
  "client": "Popology",
  "services": [
    "Web Development",
    "Performance Optimisation",
    "Sustainable Web Design",
    "Technical Consulting"
  ],
  "longDescription": "When experiential agency Popology needed a high-impact website to match their creative edge, they turned to longtime collaborators Marzipan Media to bring the vision to life — merging stunning design with world-class performance.\n\nTogether, we created popology.com.au — a website that loads fast, looks phenomenal, and reflects both agencies’ shared values of innovation and sustainability.\n\nPopology led the creative direction — crafting a playful, immersive design that captures the energy of their brand experiences. Marzipan took that concept and brought it to life through a modern, ultra-lightweight build designed for speed and user engagement.\n\nFrom page transitions to dynamic project showcases, the result is an interactive site that invites exploration — with lightning-fast load times and near-invisible code.\n\nThis project wasn’t just about performance — it was about impact. The site was built using sustainable web development practices that reduce carbon emissions with every visit. It proves you don’t have to sacrifice creativity to be climate-conscious.\n\nBuilt on cutting-edge tech, optimised for mobile, and incredibly lightweight, it’s a model for how sustainable sites should be built — beautiful, efficient, and future-ready.",
  "videos": []
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
    longDescription: "Small businesses are the backbone of innovation, but standing out in today's competitive digital space can be a challenge. At Marzipan Media, we specialise in helping purpose-driven brands like Toasty, creators of the Ultimate Weatherproof Jacket, achieve their digital goals through strategic SEO.\n\nThe Challenge\n\nThis was quite a personal story with Toasty. They had a fantastic product – a jacket designed to withstand the harshest outdoor conditions – but when our Marzipan founder, Ben tried to purchase one online, he noticed the website was holding them back from delivering a smooth checkout process. Their digital visibility was also limiting their reach.\n\nLike many new businesses with freshly launched websites, Toasty was starting from ground zero with their SEO, and their mobile site performance needed significant improvement to compete in today's mobile-first world.\n\nOur Approach\n\nWe focused on several key areas to boost Toasty's online presence:\n\n• Mobile Site Speed: We improved their mobile site speed by 30%, ensuring users could navigate quickly and efficiently.\n\n• Domain Authority: We increased Toasty's domain authority from 1 to 8, laying the foundation for better rankings.\n\n• Keyword Rankings: By optimizing content and targeting strategic keywords, we lifted key phrases an average of 12 places in search rankings.\n\n• Overall SEO Score: Using industry-standard tools, we took their SEO score from 59 to 82, a significant leap that reflects their improved optimisation.\n\nReal Results\n\nThe impact of our work went beyond just numbers. More adventurers can now discover Toasty's Ultimate Weatherproof Jacket – a game-changer for anyone seeking reliable, stylish gear for the great outdoors.\n\nWe took the jackets camping on the south coast through a chilly autumnal weekend and loved them. Living up to their name, they kept us warm in the cold evenings and stayed dry after our early morning swims. It truly was a pleasure getting to know both the website and the product so well.\n\nA Partnership for Growth\n\nOur collaboration with Toasty demonstrates the power of a well-executed SEO strategy. From technical improvements to keyword optimisation, every step was designed to position them as leaders in their industry. And while the results speak for themselves, this is only the beginning of Toasty's journey to becoming a household name in outdoor gear.",
  },
  {
    title: "Royal Botanic Garden – A Living Digital Archive",
    imageUrl: "/video-content-sydney-rbg-marzipan.png", 
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
    longDescription: "It was an honour to lead the digital transformation of Australia's oldest scientific institution and one of Sydney's most beloved public spaces – the Royal Botanic Garden Sydney.\n\nThe Challenge\n\nThe Garden's online presence no longer reflected its significance as a world-class scientific and cultural institution. With an outdated CMS, deteriorating user experience, and poor accessibility, the digital infrastructure needed a complete overhaul.\n\nOur Comprehensive Solution\n\nAs a prequalified agency under the NSW SCM2701 scheme, we embarked on a multi-year partnership to revitalise the Garden's digital presence:\n\n• Full Website Redevelopment: Led the complete redesign across the Garden and its four sister sites\n• Strategic Leadership: Managed everything from initial brief creation to supplier coordination\n• Content Creation: Developed a rich library of photography, drone footage, and video content\n• Technical Integration: Implemented CRM solutions and provided comprehensive team training\n\nKey Achievements\n\n• Created the first truly accessible, mobile-responsive website in the Garden's 200-year history\n• Developed a content-first, image-led platform that showcases the Garden's beauty\n• Produced compelling video content still featured throughout the Garden today\n• Successfully integrated Salesforce CRM for improved visitor engagement\n\nHighlight Projects\n\n• The Calyx building launch campaign\n• Vivid Sydney event coverage\n• Behind-the-scenes documentary series featuring the Garden's passionate staff\n• Development of an intuitive wayfinding app for visitors\n\nOngoing Partnership\n\nFor over six years, we've continued to support the Garden across social media, SEO, video production, and digital strategy. Our work ensures that the Garden's digital presence blooms as beautifully as its physical space, connecting with visitors both online and in person.",
    videos: [
      {
        url: "https://youtu.be/wZihT4gxvkA",
        title: "Royal Botanic Garden Sydney - A Living Archive",
        description: "Exploring Australia's oldest scientific institution"
      },
      {
        url: "https://youtu.be/ezuDrxkn2C0",
        title: "Behind the Scenes at the Garden",
        description: "Meet the passionate staff preserving our botanical heritage"
      }
    ]
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
