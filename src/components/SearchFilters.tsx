
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

const SearchFilters = ({ onFilterChange }: FiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    jobTypes: {
      fullTime: false,
      partTime: false,
      contract: false,
      internship: false,
      remote: false,
    },
    experienceLevel: {
      entry: false,
      midLevel: false,
      senior: false,
      executive: false,
    },
    datePosted: {
      past24h: false,
      past7d: false,
      past14d: false,
      past30d: false,
    },
  });

  const handleFilterChange = (category: string, item: string, checked: boolean) => {
    const updatedFilters = {
      ...filters,
      [category]: {
        ...filters[category as keyof typeof filters],
        [item]: checked,
      },
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    const resetFiltersObj = {
      jobTypes: {
        fullTime: false,
        partTime: false,
        contract: false,
        internship: false,
        remote: false,
      },
      experienceLevel: {
        entry: false,
        midLevel: false,
        senior: false,
        executive: false,
      },
      datePosted: {
        past24h: false,
        past7d: false,
        past14d: false,
        past30d: false,
      },
    };
    setFilters(resetFiltersObj);
    onFilterChange(resetFiltersObj);
  };

  return (
    <div className="w-full">
      <Button
        variant="outline"
        onClick={toggleFilters}
        className="flex items-center mb-4 md:hidden"
      >
        <Filter className="mr-2 h-4 w-4" />
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </Button>

      <div className={`${showFilters ? 'block' : 'hidden md:block'}`}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Job Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox
                  id="full-time"
                  checked={filters.jobTypes.fullTime}
                  onCheckedChange={(checked) =>
                    handleFilterChange('jobTypes', 'fullTime', checked === true)
                  }
                />
                <Label htmlFor="full-time" className="ml-2">
                  Full-time
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="part-time"
                  checked={filters.jobTypes.partTime}
                  onCheckedChange={(checked) =>
                    handleFilterChange('jobTypes', 'partTime', checked === true)
                  }
                />
                <Label htmlFor="part-time" className="ml-2">
                  Part-time
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="contract"
                  checked={filters.jobTypes.contract}
                  onCheckedChange={(checked) =>
                    handleFilterChange('jobTypes', 'contract', checked === true)
                  }
                />
                <Label htmlFor="contract" className="ml-2">
                  Contract
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="internship"
                  checked={filters.jobTypes.internship}
                  onCheckedChange={(checked) =>
                    handleFilterChange('jobTypes', 'internship', checked === true)
                  }
                />
                <Label htmlFor="internship" className="ml-2">
                  Internship
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="remote"
                  checked={filters.jobTypes.remote}
                  onCheckedChange={(checked) =>
                    handleFilterChange('jobTypes', 'remote', checked === true)
                  }
                />
                <Label htmlFor="remote" className="ml-2">
                  Remote
                </Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Experience Level</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox
                  id="entry-level"
                  checked={filters.experienceLevel.entry}
                  onCheckedChange={(checked) =>
                    handleFilterChange('experienceLevel', 'entry', checked === true)
                  }
                />
                <Label htmlFor="entry-level" className="ml-2">
                  Entry level
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="mid-level"
                  checked={filters.experienceLevel.midLevel}
                  onCheckedChange={(checked) =>
                    handleFilterChange('experienceLevel', 'midLevel', checked === true)
                  }
                />
                <Label htmlFor="mid-level" className="ml-2">
                  Mid level
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="senior"
                  checked={filters.experienceLevel.senior}
                  onCheckedChange={(checked) =>
                    handleFilterChange('experienceLevel', 'senior', checked === true)
                  }
                />
                <Label htmlFor="senior" className="ml-2">
                  Senior
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="executive"
                  checked={filters.experienceLevel.executive}
                  onCheckedChange={(checked) =>
                    handleFilterChange('experienceLevel', 'executive', checked === true)
                  }
                />
                <Label htmlFor="executive" className="ml-2">
                  Executive
                </Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Date Posted</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox
                  id="24h"
                  checked={filters.datePosted.past24h}
                  onCheckedChange={(checked) =>
                    handleFilterChange('datePosted', 'past24h', checked === true)
                  }
                />
                <Label htmlFor="24h" className="ml-2">
                  Past 24 hours
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="7d"
                  checked={filters.datePosted.past7d}
                  onCheckedChange={(checked) =>
                    handleFilterChange('datePosted', 'past7d', checked === true)
                  }
                />
                <Label htmlFor="7d" className="ml-2">
                  Past 7 days
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="14d"
                  checked={filters.datePosted.past14d}
                  onCheckedChange={(checked) =>
                    handleFilterChange('datePosted', 'past14d', checked === true)
                  }
                />
                <Label htmlFor="14d" className="ml-2">
                  Past 14 days
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="30d"
                  checked={filters.datePosted.past30d}
                  onCheckedChange={(checked) =>
                    handleFilterChange('datePosted', 'past30d', checked === true)
                  }
                />
                <Label htmlFor="30d" className="ml-2">
                  Past 30 days
                </Label>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={resetFilters}
            className="w-full mt-4"
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
