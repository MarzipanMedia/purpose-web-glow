
// A utility to calculate the overall "Shine Score" based on multiple factors
export type SiteAnalysisMetrics = {
  seoScore?: number;
  speedScore?: number;
  accessibilityScore?: number;
  conversionScore?: number;
};

export const calculateShineScore = (metrics: SiteAnalysisMetrics): number => {
  // Define weights for each category
  const weights = {
    seo: 0.3,
    speed: 0.3,
    accessibility: 0.2,
    conversion: 0.2
  };

  // Get scores with defaults for missing values
  const seoScore = metrics.seoScore ?? 50;
  const speedScore = metrics.speedScore ?? 60;
  const accessibilityScore = metrics.accessibilityScore ?? 70;
  const conversionScore = metrics.conversionScore ?? 65;

  // Calculate weighted average
  const weightedScore = 
    (seoScore * weights.seo) +
    (speedScore * weights.speed) +
    (accessibilityScore * weights.accessibility) +
    (conversionScore * weights.conversion);

  // Round to nearest integer
  return Math.round(weightedScore);
};

// Quick analysis function to simulate a quick website check
export const performQuickAnalysis = (url: string): SiteAnalysisMetrics => {
  // This is a simplified mock function
  // In a real implementation, we would do actual checks or API calls
  
  // For demo purposes, generate somewhat random but realistic scores
  const randomFactor = url.length % 20; // Use URL length as a seed for variety
  
  return {
    seoScore: 55 + randomFactor,
    speedScore: 60 + (randomFactor / 2),
    accessibilityScore: 70 - (randomFactor / 3),
    conversionScore: 65 + (randomFactor / 4)
  };
};

// Get primary issue based on lowest score
export const getPrimaryIssue = (metrics: SiteAnalysisMetrics): {area: string, description: string} => {
  const scores = [
    { area: 'SEO', score: metrics.seoScore ?? 100, description: "Your SEO needs improvement to help people find your site." },
    { area: 'Site Speed', score: metrics.speedScore ?? 100, description: "Your site's loading time is affecting user experience." },
    { area: 'Accessibility', score: metrics.accessibilityScore ?? 100, description: "Your site has accessibility barriers that could limit your audience." },
    { area: 'Conversion', score: metrics.conversionScore ?? 100, description: "Your site has conversion barriers that are likely costing you business." }
  ];
  
  // Find the lowest scoring area
  const lowestScore = scores.reduce((prev, current) => 
    (prev.score < current.score) ? prev : current
  );
  
  return {
    area: lowestScore.area,
    description: lowestScore.description
  };
};
