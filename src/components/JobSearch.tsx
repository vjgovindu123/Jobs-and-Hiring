
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';

interface JobSearchProps {
  onSearch: (query: { keyword: string; location: string }) => void;
}

const JobSearch = ({ onSearch }: JobSearchProps) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword, location });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Job title, keywords, or company"
            className="pl-10 h-12 border-gray-200 focus:border-blue-500"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="City, state, or remote"
            className="pl-10 h-12 border-gray-200 focus:border-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <Button type="submit" className="h-12 px-6 bg-blue-600 hover:bg-blue-700">
          Search Jobs
        </Button>
      </div>
    </form>
  );
};

export default JobSearch;
