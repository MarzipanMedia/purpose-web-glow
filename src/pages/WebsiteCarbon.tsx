
import React, { useEffect } from 'react';
import { z } from "zod";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaHead from '@/components/MetaHead';
import CarbonHero from '../components/carbon/CarbonHero';
import CarbonForm from '../components/carbon/CarbonForm';
import CarbonResultDisplay from '../components/carbon/CarbonResult';
import InfoSection from '../components/carbon/InfoSection';
import { useWebsiteCarbon } from '../hooks/useWebsiteCarbon';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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
    error,
    emailSubmitted, 
    emailSending, 
    fetchCarbonData,
    setEmailSubmitted,
    setEmailSending
  } = useWebsiteCarbon();
  
  // Log on component mount for debugging
  useEffect(() => {
    console.log("WebsiteCarbon component mounted");
    return () => {
      console.log("WebsiteCarbon component unmounted");
    };
  }, []);
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted with values:", values);
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
            
            {error && (
              <Alert variant="warning" className="max-w-2xl mx-auto mt-4 mb-6 border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800">
                <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertTitle>Connection Issue</AlertTitle>
                <AlertDescription>
                  Using estimated data due to connection issues. The results are approximate.
                </AlertDescription>
              </Alert>
            )}
            
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
