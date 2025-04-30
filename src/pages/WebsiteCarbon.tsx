
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

// Schedule tasks safely with fallback for browsers without requestIdleCallback
const scheduleIdleTask = (callback: () => void, timeout = 100) => {
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(callback);
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(callback, timeout);
  }
};

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

  // Carbon calculator schema
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Website Carbon Footprint Checker",
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "description": "Free tool to check and analyze your website's carbon footprint and get recommendations to make it more environmentally sustainable.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "AUD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Marzipan Digital",
      "url": "https://marzipan.com.au"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead 
        title="Website Carbon Footprint Checker | Marzipan"
        description="Analyze your website's environmental impact with our free carbon footprint calculator. Get personalized recommendations to reduce digital emissions and create a more sustainable online presence."
        image="/marzipan-web-design-syd-min.webp"
        keywords="website carbon calculator, digital carbon footprint, eco-friendly website, sustainable web design, green web hosting"
        schemaData={[toolSchema]}
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
