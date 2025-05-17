
import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SiteAnalysisMetrics } from '../../utils/shineScoreCalculator';

interface QuickAnalysisResultProps {
  url: string;
  shineScore: number;
  metrics: SiteAnalysisMetrics;
  primaryIssue: {
    area: string;
    description: string;
  };
  onRequestFullReport: () => void;
}

// Use React.memo to prevent unnecessary re-renders
const QuickAnalysisResult: React.FC<QuickAnalysisResultProps> = React.memo(({ 
  url, 
  shineScore, 
  metrics, 
  primaryIssue,
  onRequestFullReport
}) => {
  // Precompute values that won't change
  const seoScore = metrics.seoScore ?? 50;
  const speedScore = metrics.speedScore ?? 60;
  
  return (
    <Card className="border-marzipan/30 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <CardHeader className="bg-gradient-to-r from-brandBlue/10 to-marzipan/10 dark:from-brandBlue/20 dark:to-marzipan/20 rounded-t-lg pb-6">
        <CardTitle className="text-2xl font-display flex items-center justify-between">
          <span>Quick Website Analysis</span>
          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{url}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-brandBlue to-brandBlue/80 text-white rounded-full w-32 h-32">
            <div>
              <div className="text-4xl font-bold">{shineScore}%</div>
              <div className="text-sm font-medium">Shine Score</div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-4 dark:text-white">
            Here's what's dragging you down...
          </h3>
        </div>

        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-r-md">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="text-amber-500 h-5 w-5 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium dark:text-white">{primaryIssue.area} Needs Attention</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{primaryIssue.description}</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">SEO</span>
                <span className="text-sm font-medium dark:text-gray-200">{seoScore}/100</span>
              </div>
              <Progress value={seoScore} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium dark:text-gray-200">Site Speed</span>
                <span className="text-sm font-medium dark:text-gray-200">{speedScore}/100</span>
              </div>
              <Progress value={speedScore} className="h-2" />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/50 p-5 rounded-lg text-center">
          <h3 className="text-lg font-display font-medium mb-2 dark:text-white">
            Get the full No-Fluff Fix-It List in your inbox
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            We'll send you a complete analysis with actionable steps to improve your site within minutes.
          </p>
          <Button 
            onClick={onRequestFullReport}
            className="bg-brandBlue hover:bg-brandBlue/90 text-white font-medium"
          >
            Send My Full Report <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

QuickAnalysisResult.displayName = "QuickAnalysisResult";

export default QuickAnalysisResult;
