
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import JobCard from '@/components/JobCard';
import CategoryCard from '@/components/CategoryCard';
import Footer from '@/components/Footer';
import { jobs, categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Users, Search, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredJobs = jobs.filter(job => job.featured);
  const latestJobs = [...jobs].sort(() => Math.random() - 0.5).slice(0, 6);
  
  const [activeTab, setActiveTab] = useState<'seekers' | 'employers'>('seekers');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Featured Jobs */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Featured Jobs</h2>
                <p className="text-gray-600">Explore opportunities from top companies</p>
              </div>
              <Link to="/jobs">
                <Button variant="ghost" className="mt-3 sm:mt-0">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Job Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Browse by Category</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Explore job opportunities by industry, specialty, and interest areas
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {categories.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-2">How CareerConnect Works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Simple steps to find your dream job or ideal candidate
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-8 md:space-y-0">
              <div className="flex-1 max-w-sm mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Search</h3>
                  <p className="text-gray-600">
                    Browse through thousands of job openings using our powerful search and filtering tools
                  </p>
                </div>
              </div>
              
              <div className="flex-1 max-w-sm mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Apply</h3>
                  <p className="text-gray-600">
                    Create your profile once and apply to multiple jobs with just a click
                  </p>
                </div>
              </div>
              
              <div className="flex-1 max-w-sm mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Connect</h3>
                  <p className="text-gray-600">
                    Get connected directly with employers and schedule interviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* For Job Seekers & Employers */}
        <section className="py-12 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <div className="inline-flex rounded-md mb-6">
                <button
                  className={`px-4 py-2 rounded-l-md ${activeTab === 'seekers' ? 'bg-white text-blue-800' : 'bg-blue-700 text-white'}`}
                  onClick={() => setActiveTab('seekers')}
                >
                  For Job Seekers
                </button>
                <button
                  className={`px-4 py-2 rounded-r-md ${activeTab === 'employers' ? 'bg-white text-blue-800' : 'bg-blue-700 text-white'}`}
                  onClick={() => setActiveTab('employers')}
                >
                  For Employers
                </button>
              </div>
              
              {activeTab === 'seekers' ? (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-2">Find Your Dream Job</h2>
                  <p className="max-w-2xl mb-6">
                    Join thousands of job seekers who have found their perfect match through CareerConnect. 
                    Create your profile, upload your resume, and start applying to jobs with just one click.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-700 bg-opacity-40 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">Create Your Profile</h3>
                      <p className="text-blue-100 mb-4">
                        Build a comprehensive profile that showcases your skills and experience to potential employers.
                      </p>
                      <Button className="bg-white text-blue-800 hover:bg-blue-50">Get Started</Button>
                    </div>
                    <div className="bg-blue-700 bg-opacity-40 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">One-Click Applications</h3>
                      <p className="text-blue-100 mb-4">
                        Apply to multiple jobs quickly and efficiently with our streamlined application process.
                      </p>
                      <Button className="bg-white text-blue-800 hover:bg-blue-50">Browse Jobs</Button>
                    </div>
                    <div className="bg-blue-700 bg-opacity-40 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">Job Alerts</h3>
                      <p className="text-blue-100 mb-4">
                        Set up custom job alerts and be the first to know about new opportunities that match your criteria.
                      </p>
                      <Button className="bg-white text-blue-800 hover:bg-blue-50">Set Up Alerts</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-2">Find Your Perfect Candidate</h2>
                  <p className="max-w-2xl mb-6">
                    Access our pool of qualified candidates and streamline your hiring process. 
                    Post jobs, manage applications, and connect with potential hires all in one place.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-700 bg-opacity-40 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">Post Job Listings</h3>
                      <p className="text-blue-100 mb-4">
                        Create detailed job postings that reach thousands of qualified candidates in your industry.
                      </p>
                      <Button className="bg-white text-blue-800 hover:bg-blue-50">Post a Job</Button>
                    </div>
                    <div className="bg-blue-700 bg-opacity-40 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">Candidate Management</h3>
                      <p className="text-blue-100 mb-4">
                        Review applications, schedule interviews, and manage your hiring pipeline efficiently.
                      </p>
                      <Button className="bg-white text-blue-800 hover:bg-blue-50">View Dashboard</Button>
                    </div>
                    <div className="bg-blue-700 bg-opacity-40 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3">Employer Branding</h3>
                      <p className="text-blue-100 mb-4">
                        Showcase your company culture and benefits to attract the best talent in the market.
                      </p>
                      <Button className="bg-white text-blue-800 hover:bg-blue-50">Build Profile</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Latest Jobs */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Latest Jobs</h2>
                <p className="text-gray-600">Fresh opportunities posted recently</p>
              </div>
              <Link to="/jobs">
                <Button variant="ghost" className="mt-3 sm:mt-0">
                  Browse All Jobs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="mb-4 text-gray-600">Looking for specific roles or industries?</p>
              <div className="inline-flex items-center justify-center bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Over 10,000 jobs available across all industries</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">Success Stories</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Hear from job seekers and employers who found success with CareerConnect
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "I found my dream job at a tech startup within two weeks of joining CareerConnect. 
                  The platform made it easy to filter for exactly what I was looking for."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h3 className="font-semibold">Michael Chen</h3>
                    <p className="text-sm text-gray-500">HR Manager at TechGrowth</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "As an employer, CareerConnect has transformed our hiring process. We've been 
                  able to connect with highly qualified candidates and reduce our time-to-hire significantly."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h3 className="font-semibold">Jessica Williams</h3>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "After months of searching elsewhere, I found multiple great opportunities on 
                  CareerConnect and landed a role that perfectly matched my experience and career goals."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-teal-600 to-teal-500">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step in Your Career?</h2>
              <p className="text-xl mb-8">
                Join thousands of professionals who have found their perfect job match on CareerConnect
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-teal-700 hover:bg-gray-100">
                  Find Jobs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-teal-700">
                  Post a Job
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
