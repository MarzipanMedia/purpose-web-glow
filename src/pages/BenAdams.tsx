
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaHead from '../components/MetaHead';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Mail } from 'lucide-react';

const BenAdams = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Ben Adams | Co-Founder & Technical Director at Marzipan Media"
        description="Meet Ben Adams, Co-Founder and Technical Director at Marzipan Media, leading sustainable web development and technical innovation."
      />
      
      <Header />
      
      <main className="flex-grow py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/placeholder.svg" alt="Ben Adams" />
                <AvatarFallback>BA</AvatarFallback>
              </Avatar>
              
              <div>
                <h1 className="text-4xl font-display font-semibold mb-4">Ben Adams</h1>
                <p className="text-xl text-brandBlue dark:text-marzipan mb-4">Co-Founder & Technical Director</p>
                <div className="flex gap-4">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default BenAdams;
