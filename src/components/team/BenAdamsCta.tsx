
import React from 'react';
import CTASection from '../projects/CTASection';

const BenAdamsCta = () => {
  return (
    <section className="py-20 bg-brandBlue text-white">
      <div className="container-custom">
        <CTASection 
          title="Want to learn more about sustainable web development?"
          subtitle="Explore our collection of free resources and ebooks on creating environmentally conscious digital solutions."
          showResourceLink={true}
        />
      </div>
    </section>
  );
};

export default BenAdamsCta;
