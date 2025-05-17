
import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { jobs } from '@/lib/data';
import { ArrowLeft, Bookmark, MapPin, Calendar, Building, DollarSign, Send, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link to="/jobs">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/jobs" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 mb-4 md:mb-0 md:mr-5">
                    <img 
                      src={job.logo} 
                      alt={`${job.company} logo`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                      <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                      <Badge className={job.featured ? "bg-blue-600 ml-0 md:ml-4 mt-2 md:mt-0" : "ml-0 md:ml-4 mt-2 md:mt-0"}>
                        {job.type}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mt-2 text-gray-600">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center sm:ml-6 mt-1 sm:mt-0">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mt-2 text-gray-600">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center sm:ml-6 mt-1 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 mb-4">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Save Job
                  </Button>
                  <Button variant="ghost" className="w-full sm:w-auto">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <p className="text-gray-700 mb-6">{job.description}</p>

                  <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="text-gray-700">{requirement}</li>
                    ))}
                  </ul>

                  <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700">{benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Company Information</h2>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 mr-4">
                    <img 
                      src={job.logo} 
                      alt={`${job.company} logo`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{job.company}</h3>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  A leading company in the {job.title.toLowerCase()} space, focused on delivering exceptional products.
                </p>
                <Button variant="outline" className="w-full">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Similar Jobs</h2>
                <div className="space-y-4">
                  {jobs.filter(j => j.id !== job.id).slice(0, 3).map((similarJob) => (
                    <Link to={`/job/${similarJob.id}`} key={similarJob.id} className="block">
                      <div className="border rounded-lg p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                        <h3 className="font-medium">{similarJob.title}</h3>
                        <p className="text-sm text-gray-500">{similarJob.company}</p>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{similarJob.location}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;
