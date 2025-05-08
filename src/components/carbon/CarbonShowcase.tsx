
import React, { useEffect, useState } from 'react';
import { Gauge, Leaf, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useWebsiteCarbon } from '../../hooks/useWebsiteCarbon';
import { Link } from 'react-router-dom';

const CarbonShowcase = () => {
  const [carbonSaved, setCarbonSaved] = useState(0);
  const [pageViews, setPageViews] = useState(0);
  
  useEffect(() => {
    // Simulate increasing page views and carbon savings
    const interval = setInterval(() => {
      setPageViews(prev => prev + Math.floor(Math.random() * 3));
      setCarbonSaved(prev => prev + (Math.random() * 0.5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-white to-marzipan/20 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="inline-block bg-brandBlue/10 text-brandBlue px-4 py-1 rounded-full mb-4">
            <h2 className="text-sm font-medium">Real-Time Impact</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-semibold">
            Making the Web Greener, One Page at a Time
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/website-carbon" className="block">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full p-2">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-display font-bold text-brandBlue">
                      {pageViews.toLocaleString()}
                    </div>
                    <div className="text-sm text-foreground/60">Total Page Views</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brandBlue transition-all duration-500"
                    style={{ width: `${Math.min((pageViews / 1000) * 100, 100)}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/website-carbon" className="block">
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-brandBlue/10 text-brandBlue rounded-full p-2">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-display font-bold text-brandBlue">
                      {carbonSaved.toFixed(1)}kg
                    </div>
                    <div className="text-sm text-foreground/60">CO2 Saved</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brandBlue transition-all duration-500"
                    style={{ width: `${Math.min((carbonSaved / 10) * 100, 100)}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-6">
          <Link to="/services/sustainable-web-design" className="text-brandBlue hover:underline inline-flex items-center gap-2">
            Learn how we reduce carbon footprints <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarbonShowcase;
