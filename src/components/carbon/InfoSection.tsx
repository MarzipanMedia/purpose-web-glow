
import React from 'react';
import { Button } from "@/components/ui/button";

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-center dark:text-white">
            Why Website Carbon Footprint Matters
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-marzipan/20 dark:bg-marzipan/10 p-6 rounded-lg border border-marzipan/30 dark:border-marzipan/20">
              <h3 className="font-display font-medium text-xl mb-3 dark:text-white">Environmental Impact</h3>
              <p className="text-foreground/80 dark:text-gray-300">
                The internet produces approximately 3.7% of global carbon emissions, similar to the airline industry. Each website contributes to this through data transfer, server energy, and device power consumption.
              </p>
            </div>
            
            <div className="bg-marzipan/20 dark:bg-marzipan/10 p-6 rounded-lg border border-marzipan/30 dark:border-marzipan/20">
              <h3 className="font-display font-medium text-xl mb-3 dark:text-white">Business Benefits</h3>
              <p className="text-foreground/80 dark:text-gray-300">
                Sustainable websites are typically faster, more efficient, and provide better user experiences. This can lead to higher conversion rates, improved SEO rankings, and better brand perception.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-display font-medium mb-4 dark:text-white">Ready to make your website more sustainable?</h3>
            <Button asChild size="lg" className="mt-2 bg-brandBlue hover:bg-brandBlue/90 dark:bg-brandBlue dark:hover:bg-brandBlue/90">
              <a href="/services/sustainable-web-design">Learn about our sustainable web design services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
