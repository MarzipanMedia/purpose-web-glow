
import React from 'react';
import { Gauge, Leaf } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Static data instead of simulating increases
const CARBON_DATA = {
  pageViews: 2750,
  carbonSaved: 8.5
};

const CarbonShowcase = () => {
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
                    {CARBON_DATA.pageViews.toLocaleString()}
                  </div>
                  <div className="text-sm text-foreground/60">Total Page Views</div>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brandBlue"
                  style={{ width: `${Math.min((CARBON_DATA.pageViews / 1000) * 100, 100)}%` }}
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
                    {CARBON_DATA.carbonSaved.toFixed(1)}kg
                  </div>
                  <div className="text-sm text-foreground/60">CO2 Saved</div>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brandBlue"
                  style={{ width: `${Math.min((CARBON_DATA.carbonSaved / 10) * 100, 100)}%` }}
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
