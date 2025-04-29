
import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Ben Adams",
      role: "Co-Founder & Technical Director",
      bio: "A seasoned technologist with expertise in sustainable web development, Ben drives our technical innovation whilst ensuring our solutions remain environmentally conscious.",
      image: "/placeholder.svg",
      social: {
        linkedin: "https://linkedin.com/in/benadams",
        email: "benadams@marzipan.com.au"
      }
    },
    {
      name: "Tran N",
      role: "Lead Developer",
      bio: "Tran specializes in creating efficient, sustainable code that powers our digital solutions. With expertise in modern web technologies, Tran ensures our projects are built on solid technical foundations.",
      image: "/placeholder.svg",
      social: {
        linkedin: "https://linkedin.com/in/trann",
        email: "tran@marzipan.com.au"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" aria-labelledby="team-section-heading">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 id="team-section-heading" className="text-3xl md:text-4xl font-display font-semibold mb-4">Meet Our Team</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            We're a small but mighty team of digital specialists passionate about creating sustainable digital futures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {member.name === "Ben Adams" ? (
                <Link to="/benadams" className="block">
                  <div className="aspect-square relative">
                    <img 
                      src={member.image} 
                      alt={`${member.name}, ${member.role} at Marzipan Digital`}
                      className="w-full h-full object-cover"
                      width="400"
                      height="400"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                </Link>
              ) : (
                <div className="aspect-square relative">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role} at Marzipan Digital`}
                    className="w-full h-full object-cover"
                    width="400"
                    height="400"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                </div>
              )}
              
              <div className="p-6">
                {member.name === "Ben Adams" ? (
                  <Link to="/benadams">
                    <h3 className="text-xl font-semibold mb-1 hover:text-brandBlue dark:hover:text-marzipan transition-colors">{member.name}</h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                )}
                <p className="text-brandBlue dark:text-marzipan mb-3">{member.role}</p>
                <p className="text-foreground/70 mb-4">{member.bio}</p>
                
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
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
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="text-foreground/60 hover:text-brandBlue dark:hover:text-marzipan transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
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
