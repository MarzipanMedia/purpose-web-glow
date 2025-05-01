
import React, { useEffect, useState, useRef } from 'react';
import { Gauge, Leaf } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const CarbonShowcase = () => {
  const [carbonSaved, setCarbonSaved] = useState(0);
  const [pageViews, setPageViews] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Use requestIdleCallback for non-critical updates
    const updateStats = () => {
      setPageViews(prev => prev + Math.floor(Math.random() * 3));
      setCarbonSaved(prev => prev + (Math.random() * 0.5));
    };

    // Initial update
    updateStats();
    
    // Setup interval using requestIdleCallback when browser is idle
    const startInterval = () => {
      if (typeof window.requestIdleCallback !== 'undefined') {
        window.requestIdleCallback(() => {
          intervalRef.current = window.setInterval(updateStats, 5000);
        });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
          intervalRef.current = window.setInterval(updateStats, 5000);
        }, 3000);
      }
    };
    
    startInterval();

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
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
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur">
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

          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur">
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
        </div>
      </div>
    </section>
  );
};

export default CarbonShowcase;
