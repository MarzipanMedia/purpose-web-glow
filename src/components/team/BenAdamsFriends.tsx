
import React from 'react';
import ClientLogos from '../ClientLogos';

const BenAdamsFriends = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-semibold mb-8 text-center">Life's Better with Friends</h2>
         <p className="text-3xl font-display font-semibold mb-8 text-center">Suppliers and pals we couldn't live without</h2>
          <ClientLogos />
        </div>
      </div>
    </section>
  );
};

export default BenAdamsFriends;
