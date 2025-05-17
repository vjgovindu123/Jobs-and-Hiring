
import { Button } from '@/components/ui/button';
import JobSearch from './JobSearch';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { JobSearchQuery } from '@/services/jobApi';
import { useState } from 'react';
import { searchJobsFromBackend } from '@/services/backendApi';
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (query: JobSearchQuery) => {
    setIsLoading(true);
    try {
      console.log('Search query:', query);
      
      // Use the backend API service
      const results = await searchJobsFromBackend(query);
      console.log('Search results:', results);
      
      // If no results found, show a toast
      if (results.length === 0) {
        toast({
          title: "No matching jobs found",
          description: "Try adjusting your search criteria for better results.",
        });
      }
      
      // Prepare search params for URL
      const searchParams = new URLSearchParams();
      if (query.keyword) searchParams.set('keyword', query.keyword);
      if (query.location) searchParams.set('location', query.location);
      
      // Navigate to search results page
      navigate(`/jobs?${searchParams.toString()}`);
      
    } catch (error) {
      console.error('Error performing search:', error);
      toast({
        title: "Search Error",
        description: "An unexpected error occurred during your search.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Find Your Dream Job Today
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-slide-up">
            Connect with thousands of employers looking for talented professionals just like you.
          </p>

          <div className="bg-white rounded-lg p-4 shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <JobSearch onSearch={handleSearch} />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-blue-800 w-full sm:w-auto"
              onClick={() => navigate('/profile')}
            >
              For Job Seekers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              className="bg-teal-500 hover:bg-teal-600 text-white w-full sm:w-auto"
              onClick={() => navigate('/employer')}
            >
              For Employers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 text-sm opacity-80 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p>Trusted by 10,000+ companies worldwide</p>
            <div className="mt-4 flex flex-wrap justify-center gap-8">
              {/* Company logos would go here */}
              <div className="h-6 w-24 bg-white/20 rounded"></div>
              <div className="h-6 w-24 bg-white/20 rounded"></div>
              <div className="h-6 w-24 bg-white/20 rounded"></div>
              <div className="h-6 w-24 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
