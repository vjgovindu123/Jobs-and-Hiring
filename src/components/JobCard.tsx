
import { Link } from 'react-router-dom';
import { Job } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/job/${job.id}`}>
      <Card className={`job-card ${job.featured ? 'border-l-4 border-l-blue-600' : ''}`}>
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                <div className="mt-1 sm:mt-0">
                  <Badge variant={job.featured ? "default" : "outline"} className={job.featured ? "bg-blue-600" : ""}>
                    {job.type}
                  </Badge>
                </div>
              </div>
              <p className="text-gray-600 font-medium">{job.company}</p>
              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mt-2 gap-y-1 sm:gap-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                  <span>{job.postedDate}</span>
                </div>
              </div>
              <p className="mt-3 font-medium text-blue-600">{job.salary}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;
