
import React from 'react';
import { z } from "zod";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaHead from '@/components/MetaHead';
import CarbonHero from '../components/carbon/CarbonHero';
import CarbonForm from '../components/carbon/CarbonForm';
import CarbonResultDisplay from '../components/carbon/CarbonResult';
import InfoSection from '../components/carbon/InfoSection';
import { useWebsiteCarbon } from '../hooks/useWebsiteCarbon';

// Schema for form validation
const formSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL including http:// or https://" }),
  email: z.string().email({ message: "Please enter a valid email address" }).optional(),
  adminEmail: z.string().email({ message: "Please enter a valid admin email address" }).optional(),
});

const WebsiteCarbon = () => {
  const { 
    isLoading, 
    result, 
    emailSubmitted, 
    emailSending, 
    fetchCarbonData,
    setEmailSubmitted,
    setEmailSending
  } = useWebsiteCarbon();
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await fetchCarbonData(values.url, values.email, values.adminEmail);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Website Carbon Footprint Checker | Marzipan"
        description="Check your website's carbon footprint and discover how you can make it more sustainable with our free tool."
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-subtle dark:bg-gray-900">
          <div className="container-custom">
            <CarbonHero />
            <CarbonForm isLoading={isLoading} onSubmit={onSubmit} />
            
            {result && (
              <CarbonResultDisplay 
                result={result} 
                emailSubmitted={emailSubmitted}
                emailSending={emailSending}
                setEmailSubmitted={setEmailSubmitted}
                setEmailSending={setEmailSending}
              />
            )}
          </div>
        </section>

        {/* Additional Info Section */}
        <InfoSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default WebsiteCarbon;
