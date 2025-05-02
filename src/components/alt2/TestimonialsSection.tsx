
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Marzipan completely transformed our online presence. Not only is our website beautiful and performant, but we feel good about our reduced digital footprint.",
      author: "Sarah Johnson",
      company: "EcoLiving Collective"
    },
    {
      quote: "As a B-Corp, sustainability is at our core. Marzipan understood our values and created a website that perfectly represents our brand while being environmentally conscious.",
      author: "Michael Chen",
      company: "Sustainable Solutions Co."
    },
    {
      quote: "The SEO results speak for themselves. Our organic traffic has increased by 150% since working with Marzipan, and our page load speeds are incredibly fast.",
      author: "Jessica Williams",
      company: "Green Growth Partners"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 defer-animate">
          <div className="inline-block bg-brandRed/10 text-brandRed px-4 py-1 rounded-full mb-4">
            <h3 className="text-sm font-medium">Client Success Stories</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-brandRed/5 p-6 rounded-lg border border-brandRed/20 defer-animate"
            >
              <div className="mb-4 text-brandRed">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.03a4.13 4.13 0 0 1 1.3-.93l.01-.014c.1-.05.2-.106.31-.167 1.6-.903 2.11-1.302 2.11-1.304.18-.108.33-.22.36-.335.02-.06.02-.11.02-.17 0-.06-.01-.11-.02-.17-.04-.16-.21-.3-.42-.4-.96-.493-1.98-.74-3.02-.74-1.14 0-2.2.25-3.2.75-.95.5-1.73 1.17-2.33 2.04-.61.87-.92 1.85-.92 2.94 0 1.01.26 1.95.77 2.82.52.87 1.23 1.56 2.13 2.06.9.5 1.88.75 2.94.75 1.08 0 2.08-.25 3.01-.75.93-.5 1.67-1.18 2.21-2.02.55-.84.82-1.75.82-2.72z"/>
                </svg>
              </div>
              <blockquote className="mb-4 text-foreground/80 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-brandRed/20 flex items-center justify-center text-brandRed font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
