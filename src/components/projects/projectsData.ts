
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
  date?: string;
  tags?: string[];
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
    title: "Jarli – Reach for the stars",
    category: "Indigenous Animation",
    description: "Social media strategy and content creation for an award-winning animated film inspiring Indigenous children to explore STEM and space science.",
    features: ["Social Media Assets", "Digital Content Creation", "Interactive AR Backgrounds", "Campaign Strategy", "Animated GIFs"],
    color: "bg-[#27548E]",
    textColor: "text-white",
    slug: "jarli",
    client: "House of Kitch / Royal Australian Air Force",
    services: ["Social Media Marketing", "Content Creation", "Digital Animation"],
    longDescription: "It's not every day you get help on projects that lift you higher, but that's exactly what happened when the House of Kitch invited us to create social media assets for Jarli, an award-winning short film to inspire Indigenous school children to reach for the stars. Together we created digital content assets for Instagram, Facebook and Twitter for the launch of this beautiful animated film.\n\nJarli is a proud Aboriginal girl with a knack for building things, especially things that fly. Created by the Royal Australian Air Force and UTS_ALA to inspire our kids to study STEM subjects and perhaps one day join the RAAF. 'Jarli' is another animation gem that weaves visual and oral story elements to explore the dream of flight, indigenous astronomy, and the future of our planet and its people. Jarli, 16, lives with her family in a remote community in Australia. She might look small, but she asks big questions and has big ideas. She also has a knack for building things – especially things that fly – and wants to fly herself one day… maybe even into outer space. Jarli dreams of being the first person to travel to other worlds in our solar system.\n\nDirected by Simon Rippingale, the inspirational animated short is a collaboration with First Nations storytellers, the UTS Animal Logic Academy in collaboration with the Royal Australian Air Force and Like a Photon Creative. The goal was to inspire young people (particularly girls, especially indigenous kids) to reach for the stars and widen their eyes to possibilities opened up by STEM.\n\nA critical element for Australia to achieve its sovereign space ambitions is the development of a workforce with the necessary STEM skills. With the space industry tripling in size by 2030, engagement with school kids, and encouraging them to study STEM, needs to start now.\n\nA talented team of Indigenous creatives included co-director: Chantelle Murray, writers: Jonathan Bell & Andrew Dillon and voice actors: Madeleine Madden, Wayne Blair, Mark Coles Smith and Rahmah Bin Buyong. Simon Rippingale co-directed Jarli as part of his PHD thesis under Professor Andrew Johnston.\n\nWhile the Jarli film premiered at the Sydney Film Festival, Jarli was pre-screened to a very special audience of Aboriginal children from the Katherine community in outback Northern Territory on RAAF Base Tindal. Audience members were treated to a unique pop-up cinema experience in an open aircraft hangar and a view of the night-flying activity at Tindal.\n\nProject timings are always a curious thing, and this one landed just after a short stint of fostering by Marzipan cofounder and digital guy, Ben Adams who looked after two young aboriginal children. These kids had seen some of the worst things imaginable and yet were able to still see the joy and wonder of the world, without bitterness or judgement. There are so many systemic barriers in the way of closing the gap but we're certain projects born out of love, such as this one, may help pave the way. They loved watched Jarli and enjoyed our social media games, assets and creative that was created for the film.\n\nMarzipan have created a range of social media tiles for its full release, including animated gifs, interactive AR backgrounds for Instagram and more.\n\nNot ready to stay on the ground too long, Jarli hitched a ride to the International Space Station on the NASA SpaceX Falcon 9 CRS-24 mission during National Science Week 2022. Chief Defence Scientist, Professor Tanya Monro AC said Jarli struck a chord with all of us because of her resilience, creativity and ingenuity – the qualities the next generation of Australians need to harness to achieve extraordinary things.\n\n\"It is so inspiring for Australian children, particularly First Nations children, to see clever Australian inventions driving collaboration with the US Space Force and NASA… We can't confirm this but are certain the NASA folks would have loved playing with our Instagram AR tiles ; )\"",
    videos: [
      "https://youtu.be/YoiijfjK-J8"
    ]
  },
  {
    title: "Royal Botanic Garden",
    category: "Branding, Sustainable Web Design",
    description: "It was an honour to produce a range of content creations for The Royal Botanic Garden in Sydney, including a new website, a collection of video photography and a wayfinding app. As Australia's oldest scientific institution and a much-loved public garden in the heart of the thriving city, the space layered with history and stories. Like many cultural institutions, it faced an increasingly deteriorating website with an ageing CMS and an online offering falling below government best practices in terms of accessibility usability. Marzipan Media are prequalified for digital and communications services in NSW, under the SCM2701 scheme, and as such we're proud to support the Garden in the creation of keystone digital content. We've worked side by side for over 6 years providing social media marketing, search campaigns, video production, and the new website with project management & information architecture design services to ensure the new website was built on time, on budget and with accessibility in mind. Our content creations focused on bringing the Garden to life through a human element to tell the stories of this tourism destination. Working in-house as the lead project manager to create the brand new website built for this beloved green space and its four sister sites. From the creation of the brief, tendering the project and managing suppliers and developers, our founder Ben Adams, saw the creation of the website through to completion. These activities were supported with a new suite of brand images, video content and a mobile app created for the website that launched in Spring 2017. The brand imagery is still on display throughout the Garden today. The website design and development project saw a great deal of internal stakeholder management and education to highlight the benefits of the content-first strategy placing imagery and video at the cornerstone of the new, fully responsive site.  This design will provide the Garden with an image-led tool for sharing its stories for the first time in its 200 year history. The final stage of the project saw a multi-layered content creation strategy, produced by Marzipan Media to allow fresh photography, video and drone footage to showcase this exceptional place. Local brand photographer, James Horan & his team were brought in to shoot fresh brand content for the Garden, presenting the new website in the best possible light. Elsewhere, we are proud to have produced new video content for the Garden to showcase the brand new Calyx building, the magnificent Vivid Event and some of the staff at the heart of the iconic green space. In our time with the Garden, we've trained their teams to take a digital-first approach and continue to work closely with the Gardens for major digital content projects. In 2020 we will be connecting Salesforce as their primary CRM, conducting training and stakeholder management along the way to ensure the project is a success. See more of our video services here.",
    features: ["90% lighter than average e-commerce sites", "Green hosting", "Video Storytelling"],
    color: "bg-[#C8D6AF]",
    textColor: "text-foreground",
    slug: "royal-botanic-garden",
    imageUrl: "/ecoliving-project.jpg",
    services: ["Sustainable Web Design", "Video Production", "Digital Marketing"]
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
  },
  {
    title: "Toasty",
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
    longDescription: "Small businesses are the backbone of innovation, but standing out in today's competitive digital space can be a challenge. SEO for small businesses is crucial. At Marzipan Media, we specialise in helping purpose-driven brands like Toasty, creators of the Ultimate Weatherproof Jacket, achieve their digital goals through strategic SEO.\n\nHere's how we elevated Toasty's online presence and why maintaining SEO is essential for small businesses.\n\n## The Challenge\n\nThis was quite a personal story with Toasty, they had a fantastic product – a jacket designed to withstand the harshest outdoor conditions – but when our Marzipan founder, Ben tried to purchase one online he noticed the website may be holding them back from a speedy check out process. Not only that but their digital visibility was limiting their reach. Like many new businesses with freshly launched websites, Toasty was starting from ground zero with their SEO, and their mobile site performance needed significant improvement to compete in today's mobile-first world.\n\nKey areas of focus included:\n\n- Improving mobile site speed to enhance user experience.\n- Building domain authority to establish trust and visibility.\n- Increasing rankings for high-value keywords and phrases.\n- Ironing out checkout process and email deliverability.\n- Boosting their overall SEO score to improve discoverability.\n\n## Our SEO Results\n\nOver the course of the SEO sprint, we delivered tangible results that positioned Toasty for long-term success:\n\n### Mobile Site Speed\nWe improved their mobile site speed by 30%, ensuring users could navigate their site quickly and efficiently – a crucial factor for both user satisfaction and Google rankings.\n\n### Domain Authority\nWe increased Toasty's domain authority from 1 to 8, laying the foundation for better rankings and greater trust from search engines.\n\n### Keyword Rankings\nBy optimizing content and targeting strategic keywords, we lifted a large number of key phrases an average of 12 places in search engine rankings. Now, adventurers searching for durable weatherproof jackets are more likely to find Toasty.\n\n### Overall SEO Score\nUsing tools like SEOability, we took their SEO score from 59 to 82, a significant leap that reflects their improved optimisation and readiness to compete in the market. Many of these tools are free and can be a great help to your SEO for small businesses.\n\n## Why SEO Is Essential for Small Businesses\n\nOur work with Toasty underscores the importance of ongoing SEO for small businesses. Here's why it matters:\n\n### Visibility and Discoverability\nRanking higher on search engines means being seen by the right people at the right time. For Toasty, this means outdoor enthusiasts searching for durable, weatherproof jackets now find them more easily.\n\n### Building Credibility\nSEO isn't just about rankings – it's about building trust. A strong domain authority signals to customers that Toasty is a reliable, established brand in the outdoor gear market.\n\n### Long-Term Benefits\nUnlike short-term advertising campaigns, SEO for small businesses offers sustainable growth. The work we've done with Toasty will continue to pay dividends as they expand their reach.\n\n### Improved User Experience\nEnhancing mobile site speed and optimising the site layout not only improves rankings but also keeps users engaged, leading to higher conversion rates.\n\n## A Jacket Worth Discovering\n\nWith their new and improved SEO, more adventurers can now discover Toasty's Ultimate Weatherproof Jacket – a game-changer for anyone seeking reliable, stylish gear for the great outdoors. Whether you're hiking in unpredictable weather or braving the elements, Toasty's jackets ensure you stay dry, warm, and ready for your next adventure.\n\nWe took out Toasty jackets camping on the south coast through a chilly autumnal weekend and loved them. Living up to their name keeping us warm in the cold evenings and tasty dry after our early morning swims. It truly was a pleasure getting to know the website and the product so well. We hope this small SEO sprint helps lift their reach.\n\n## The Takeaway\n\nOur partnership with Toasty demonstrates the power of a well-executed SEO strategy. From technical improvements to keyword optimisation, every step we took was designed to position them as leaders in their industry. And while the results speak for themselves, this is only the beginning of Toasty's journey to becoming a household name in outdoor gear."
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
