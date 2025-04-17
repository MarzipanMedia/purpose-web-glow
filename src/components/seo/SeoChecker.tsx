
import React, { useState } from 'react';
import { Search, Link, FileSearch, BarChart, AlertTriangle, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface FormValues {
  websiteUrl: string;
  keyword?: string;
}

const SeoChecker: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const onSubmit = async (data: FormValues) => {
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock results data - in a real implementation, this would come from an API
      const seoResults = {
        url: data.websiteUrl,
        score: 68,
        title: "Your website could be optimized better",
        overview: {
          title: data.websiteUrl.includes("marzipan") ? "Marzipan Digital | Sustainable Web Design" : "Website Title Needs Optimization",
          titleScore: data.websiteUrl.includes("marzipan") ? 85 : 60,
          metaDescription: "Your meta description needs optimization for better click-through rates.",
          metaScore: 50,
          headings: "Some heading structure issues were found.",
          headingsScore: 70,
          siteSpeed: "Your website loads in approximately 3.2 seconds.",
          speedScore: 65,
        },
        technical: {
          mobileOptimized: true,
          httpsEnabled: data.websiteUrl.startsWith("https"),
          brokenLinks: 3,
          errorPages: 1,
          robotsTxt: true,
          sitemapXml: data.websiteUrl.includes("marzipan"),
        },
        keywords: {
          density: 2.1,
          relevance: 65,
          competition: "Medium",
          suggestions: [
            "sustainable web design",
            "eco-friendly websites",
            "green web development",
            "low carbon websites",
            "sustainable digital design"
          ]
        }
      };
      
      setResults(seoResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 animate-fade-in">
      {!results ? (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold">
              Free SEO Performance Checker
            </h2>
            <p className="text-foreground/70 mt-2">
              Discover how your website performs and get actionable insights
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Enter your website URL</Label>
              <div className="flex space-x-2">
                <Input
                  id="websiteUrl"
                  placeholder="https://yourwebsite.com"
                  className="flex-1"
                  {...register("websiteUrl", { 
                    required: "Website URL is required",
                    pattern: {
                      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                      message: "Please enter a valid URL"
                    }
                  })}
                />
                <Button type="submit" disabled={isAnalyzing} className="bg-brandRed hover:bg-brandRed/90">
                  {isAnalyzing ? "Analyzing..." : "Check SEO"}
                </Button>
              </div>
              {errors.websiteUrl && (
                <p className="text-sm text-destructive mt-1">{errors.websiteUrl.message}</p>
              )}
            </div>
            
            <div className="text-sm text-center text-muted-foreground">
              We'll analyze your website and provide personalized SEO recommendations
            </div>
          </form>

          {isAnalyzing && (
            <div className="mt-8 space-y-4 text-center">
              <h3 className="text-xl font-display">Analyzing your website...</h3>
              <Progress value={65} className="w-full" />
              <p className="text-sm text-muted-foreground">This may take a few moments</p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-display font-semibold">{results.url}</h2>
              <p className="text-muted-foreground">SEO Score: {results.score}/100</p>
            </div>
            <Button 
              onClick={() => setResults(null)} 
              variant="outline"
              className="text-sm"
            >
              Check Another Website
            </Button>
          </div>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="technical">Technical SEO</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileSearch className="h-5 w-5 text-brandBlue" />
                    Page Title
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">{results.overview.title}</p>
                  <div className="flex items-center gap-2">
                    <Progress value={results.overview.titleScore} className="flex-1" />
                    <span className="text-sm font-medium">{results.overview.titleScore}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {results.overview.titleScore > 70 
                      ? "Good title length and keyword placement" 
                      : "Consider optimizing your page title with relevant keywords"}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Search className="h-5 w-5 text-brandBlue" />
                    Meta Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">{results.overview.metaDescription}</p>
                  <div className="flex items-center gap-2">
                    <Progress value={results.overview.metaScore} className="flex-1" />
                    <span className="text-sm font-medium">{results.overview.metaScore}%</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-brandBlue" />
                    Site Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">{results.overview.siteSpeed}</p>
                  <div className="flex items-center gap-2">
                    <Progress value={results.overview.speedScore} className="flex-1" />
                    <span className="text-sm font-medium">{results.overview.speedScore}%</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technical" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Mobile Friendly</p>
                      {results.technical.mobileOptimized ? (
                        <span className="bg-green-100 text-green-800 p-1 rounded-full">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 p-1 rounded-full">
                          <AlertTriangle className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">HTTPS Secured</p>
                      {results.technical.httpsEnabled ? (
                        <span className="bg-green-100 text-green-800 p-1 rounded-full">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 p-1 rounded-full">
                          <AlertTriangle className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Broken Links</p>
                      <span className={`${results.technical.brokenLinks > 0 ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'} px-2 py-0.5 rounded-full text-xs font-medium`}>
                        {results.technical.brokenLinks}
                      </span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <p className="text-sm">XML Sitemap</p>
                      {results.technical.sitemapXml ? (
                        <span className="bg-green-100 text-green-800 p-1 rounded-full">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 p-1 rounded-full">
                          <AlertTriangle className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="keywords" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Analysis</CardTitle>
                  <CardDescription>
                    Based on your website content and industry
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Keyword Density</span>
                      <span className="text-sm">{results.keywords.density}%</span>
                    </div>
                    <Progress value={results.keywords.density * 20} className="mt-1" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Content Relevance</span>
                      <span className="text-sm">{results.keywords.relevance}%</span>
                    </div>
                    <Progress value={results.keywords.relevance} className="mt-1" />
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold mb-2">Suggested Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {results.keywords.suggestions.map((keyword: string, index: number) => (
                        <span key={index} className="bg-muted px-2 py-1 rounded-md text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground">
                    Incorporating these keywords naturally into your content can help improve your search rankings.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="bg-marzipan/20 p-6 rounded-lg">
            <h3 className="text-xl font-display font-medium mb-4">Get a Complete SEO Audit</h3>
            <p className="text-sm mb-4">
              This is just a basic analysis. Our team can provide a comprehensive SEO audit with actionable recommendations tailored to your business goals.
            </p>
            <Button className="w-full md:w-auto bg-brandRed hover:bg-brandRed/90">
              Book Your Free Consultation
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoChecker;
