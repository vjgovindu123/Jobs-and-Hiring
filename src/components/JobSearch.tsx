
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface JobSearchProps {
  onSearch: (query: { keyword: string; location: string }) => void;
}

const JobSearch = ({ onSearch }: JobSearchProps) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update UI state
    setIsSearching(true);
    
    try {
      // Simulate API call to backend
      // In a real application, replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Call the passed onSearch function to handle search results
      onSearch({ keyword, location });
      
      // Show success toast
      toast({
        title: "Search completed",
        description: `Found jobs matching "${keyword}" in ${location || 'all locations'}`,
      });
    } catch (error) {
      // Show error toast
      toast({
        title: "Search failed",
        description: "Could not complete your search. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Job title, keywords, or company"
            className="pl-10 h-12 border-gray-200 focus:border-blue-500 text-gray-800" 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="City, state, or remote"
            className="pl-10 h-12 border-gray-200 focus:border-blue-500 text-gray-800"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button 
          type="submit" 
          className="h-12 px-6 bg-blue-600 hover:bg-blue-700"
          disabled={isSearching}
        >
          {isSearching ? "Searching..." : "Search Jobs"}
        </Button>
      </div>
    </form>
  );
};

export default JobSearch;
