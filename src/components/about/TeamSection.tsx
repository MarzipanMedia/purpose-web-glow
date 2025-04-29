
import React from 'react';
import { Linkedin, Mail, Twitter, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  location?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    behance?: string;
    website?: string;
  };
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Ben Adams",
      role: "Co-Founder & Web, Content & SEO",
      bio: "A seasoned technologist with expertise in sustainable web development, Ben drives our digital innovation whilst ensuring our solutions remain environmentally conscious for Sydney businesses.",
      image: "/marzipan-ben.webp",
      location: "Sydney, NSW",
      social: {
        linkedin: "https://linkedin.com/in/benadams",
        email: "ben@marzipan.com.au",
        website: "https://marzipan.com.au/benadams"
      }
    },
    {
      name: "Tran N",
      role: "Lead Developer",
      bio: "Tran specialises in creating efficient code that powers our online solutions for Sydney-based businesses. With expertise in Figma, WordPress and web development, Tran ensures our projects are built on solid technical foundations.",
      image: "/tran-wp-web-developer.png",
      location: "Sydney, NSW",
      social: {
        behance: "https://www.behance.net/thisistrann",
        email: "ben@marzipan.com.au"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" aria-labelledby="team-section-heading" id="sydney-team">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="team-section-heading" className="text-3xl md:text-4xl font-display font-semibold mb-4">Meet Our Sydney Team</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            We're a small but mighty team of digital specialists based in Sydney, passionate about creating sustainable digital content so local Sydney businesses can shine brighter online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/Person"
            >
              {member.name === "Ben Adams" ? (
                <Link to="/benadams" className="block">
                  <div className="aspect-square relative">
                    <img 
                      src={member.image} 
                      alt={`${member.name}, ${member.role} at Marzipan Digital in Sydney`}
                      className="w-full h-full object-cover"
                      width="400"
                      height="400"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                      itemProp="image"
                    />
                  </div>
                </Link>
              ) : (
                <div className="aspect-square relative">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role} at Marzipan Digital in Sydney`}
                    className="w-full h-full object-cover"
                    width="400"
                    height="400"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                    itemProp="image"
                  />
                </div>
              )}
              
              <div className="p-6">
                {member.name === "Ben Adams" ? (
                  <Link to="/benadams">
                    <h3 className="text-xl font-semibold mb-1 hover:text-brandBlue dark:hover:text-marzipan transition-colors" itemProp="name">{member.name}</h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-semibold mb-1" itemProp="name">{member.name}</h3>
                )}
                <p className="text-brandBlue dark:text-marzipan mb-1" itemProp="jobTitle">{member.role}</p>
                
                {member.location && (
                  <p className="text-foreground/60 mb-2 flex items-center text-sm">
                    <Globe className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span itemProp="workLocation">{member.location}</span>
                  </p>
                )}
                
                <p className="text-foreground/70 mb-4" itemProp="description">{member.bio}</p>
                
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                      itemProp="sameAs"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                      itemProp="sameAs"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
                      aria-label={`Email ${member.name}`}
                      itemProp="email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}

                  {member.social.website && (
                    <a 
                      href={member.social.website}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
                      aria-label={`${member.name}'s Website`}
                      itemProp="url"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
