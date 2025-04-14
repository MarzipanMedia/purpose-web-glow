
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  title: string;
  description?: string;
  faqs: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, description, faqs }) => {
  // Create structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof faq.answer === 'string' ? faq.answer : 'See website for detailed answer.',
      },
    })),
  };

  return (
    <section className="py-16 bg-marzipan/10">
      <div className="container-custom">
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>

        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-foreground/80">
              {description}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-marzipan/30 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline font-display font-medium text-lg md:text-xl text-left">
                  <span className="text-brandRed mr-2">{index + 1}.</span> {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-6 text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
