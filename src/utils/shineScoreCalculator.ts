
// A utility to calculate the overall "Shine Score" based on multiple factors
export type SiteAnalysisMetrics = {
  seoScore?: number;
  speedScore?: number;
  accessibilityScore?: number;
  conversionScore?: number;
};

// Memoization cache for score calculations
const calculationCache = new Map<string, number>();

export const calculateShineScore = (metrics: SiteAnalysisMetrics): number => {
  // Generate cache key based on metrics
  const cacheKey = `${metrics.seoScore ?? 50}-${metrics.speedScore ?? 60}-${metrics.accessibilityScore ?? 70}-${metrics.conversionScore ?? 65}`;
  
  // Return cached result if available
  if (calculationCache.has(cacheKey)) {
    return calculationCache.get(cacheKey)!;
  }
  
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
  const result = Math.round(weightedScore);
  
  // Store in cache
  calculationCache.set(cacheKey, result);
  
  return result;
};

// Optimize analysis function to be more performant
export const performQuickAnalysis = (url: string): SiteAnalysisMetrics => {
  // This is a simplified mock function
  // In a real implementation, we would do actual checks or API calls
  
  // Use a more efficient way to generate somewhat random but consistent scores
  // Compute hash from URL for better consistency
  const hashCode = url.split('').reduce((hash, char) => {
    return ((hash << 5) - hash) + char.charCodeAt(0) | 0;
  }, 0);
  
  const positiveHash = Math.abs(hashCode) % 20;
  
  return {
    seoScore: Math.min(100, Math.max(30, 55 + positiveHash)),
    speedScore: Math.min(100, Math.max(30, 60 + (positiveHash / 2))),
    accessibilityScore: Math.min(100, Math.max(30, 70 - (positiveHash / 3))),
    conversionScore: Math.min(100, Math.max(30, 65 + (positiveHash / 4)))
  };
};

// Get primary issue based on lowest score with memoization
const issueCache = new Map<string, {area: string, description: string}>();

export const getPrimaryIssue = (metrics: SiteAnalysisMetrics): {area: string, description: string} => {
  // Generate cache key
  const cacheKey = `${metrics.seoScore ?? 100}-${metrics.speedScore ?? 100}-${metrics.accessibilityScore ?? 100}-${metrics.conversionScore ?? 100}`;
  
  // Return cached result if available
  if (issueCache.has(cacheKey)) {
    return issueCache.get(cacheKey)!;
  }
  
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
  
  const result = {
    area: lowestScore.area,
    description: lowestScore.description
  };
  
  // Store in cache
  issueCache.set(cacheKey, result);
  
  return result;
};
