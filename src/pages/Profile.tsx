
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Edit, Upload, Download, Plus, User, Briefcase, BookOpen, Mail, MapPin, Phone } from 'lucide-react';
import { jobSeeker } from '@/lib/data';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                  {jobSeeker.photo ? (
                    <img src={jobSeeker.photo} alt={jobSeeker.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600">
                      <User className="h-12 w-12" />
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-semibold">{jobSeeker.name}</h2>
                <p className="text-gray-600 mb-2">{jobSeeker.title}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{jobSeeker.location}</span>
                </div>
                <Button className="w-full mb-3">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <div className="flex gap-2 w-full">
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Overall completion</span>
                      <span className="font-medium">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Personal Information</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Skills</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Experience</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Education</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span>Portfolio</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                      <span>Certifications</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full text-sm">Complete Your Profile</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-gray-600">alex.johnson@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-gray-600">(415) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-600">{jobSeeker.location}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0 h-auto">
                  <Edit className="h-3.5 w-3.5 mr-1" />
                  <span className="text-xs">Update Contact Info</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="resume">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="resume" className="flex-1">Resume</TabsTrigger>
                <TabsTrigger value="applications" className="flex-1">Applications</TabsTrigger>
                <TabsTrigger value="saved" className="flex-1">Saved Jobs</TabsTrigger>
                <TabsTrigger value="alerts" className="flex-1">Job Alerts</TabsTrigger>
              </TabsList>

              <TabsContent value="resume">
                <Card className="mb-6">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Skills</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {jobSeeker.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1.5">
                          {skill}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-sm py-1.5 border-dashed">
                        <Plus className="h-3.5 w-3.5 mr-1" />
                        Add Skill
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Experience</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {jobSeeker.experience.map((exp, index) => (
                        <div key={index} className={index !== jobSeeker.experience.length - 1 ? "pb-6 border-b" : ""}>
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-md bg-gray-100 flex-shrink-0 flex items-center justify-center">
                              <Briefcase className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="ml-4 flex-grow">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="font-semibold">{exp.title}</h3>
                                <Button variant="ghost" size="sm" className="p-0 h-auto sm:ml-2">
                                  <Edit className="h-3.5 w-3.5 text-gray-400" />
                                </Button>
                              </div>
                              <p className="text-gray-600">{exp.company}</p>
                              <p className="text-sm text-gray-500">{exp.duration}</p>
                              <p className="mt-2 text-gray-700">{exp.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Education</CardTitle>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {jobSeeker.education.map((edu, index) => (
                        <div key={index}>
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-md bg-gray-100 flex-shrink-0 flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="ml-4">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="font-semibold">{edu.degree}</h3>
                                <Button variant="ghost" size="sm" className="p-0 h-auto sm:ml-2">
                                  <Edit className="h-3.5 w-3.5 text-gray-400" />
                                </Button>
                              </div>
                              <p className="text-gray-600">{edu.institution}</p>
                              <p className="text-sm text-gray-500">Graduated {edu.year}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="font-semibold">Frontend Developer</h3>
                            <p className="text-gray-600">TechGrowth Inc.</p>
                            <p className="text-sm text-gray-500">Applied on May 15, 2023</p>
                          </div>
                          <Badge className="mt-2 md:mt-0 w-fit">Under Review</Badge>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="font-semibold">UX/UI Designer</h3>
                            <p className="text-gray-600">CreativeMinds</p>
                            <p className="text-sm text-gray-500">Applied on May 10, 2023</p>
                          </div>
                          <Badge variant="outline" className="mt-2 md:mt-0 w-fit text-gray-600">Viewed</Badge>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="font-semibold">Product Manager</h3>
                            <p className="text-gray-600">InnovateNow</p>
                            <p className="text-sm text-gray-500">Applied on May 5, 2023</p>
                          </div>
                          <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">Interview Scheduled</Badge>
                        </div>
                        <Separator className="my-3" />
                        <div className="text-sm">
                          <p className="font-medium">Interview Details:</p>
                          <p className="text-gray-600">May 22, 2023 • 10:00 AM (PST)</p>
                          <div className="mt-2 flex gap-2">
                            <Button size="sm">Join Interview</Button>
                            <Button variant="outline" size="sm">Reschedule</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="saved">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="font-semibold">Senior Developer</h3>
                            <p className="text-gray-600">TechGrowth Inc.</p>
                            <p className="text-sm text-gray-500">San Francisco, CA • $120,000 - $150,000</p>
                            <p className="text-sm text-gray-500">Saved on May 18, 2023</p>
                          </div>
                          <div className="mt-3 md:mt-0 flex flex-col gap-2">
                            <Button size="sm">Apply Now</Button>
                            <Button variant="ghost" size="sm" className="text-gray-500">Remove</Button>
                          </div>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="font-semibold">Marketing Manager</h3>
                            <p className="text-gray-600">InnovateNow</p>
                            <p className="text-sm text-gray-500">New York, NY • $110,000 - $130,000</p>
                            <p className="text-sm text-gray-500">Saved on May 16, 2023</p>
                          </div>
                          <div className="mt-3 md:mt-0 flex flex-col gap-2">
                            <Button size="sm">Apply Now</Button>
                            <Button variant="ghost" size="sm" className="text-gray-500">Remove</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="alerts">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Your Job Alerts</CardTitle>
                    <Button>
                      <Plus className="h-4 w-4 mr-1" />
                      Create Alert
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="font-semibold">Frontend Developer jobs in San Francisco</h3>
                            <p className="text-sm text-gray-500">Receives daily email alerts • Created on May 10, 2023</p>
                          </div>
                          <div className="mt-3 md:mt-0 flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-gray-500">Delete</Button>
                          </div>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="font-semibold">Remote UX/UI Designer positions</h3>
                            <p className="text-sm text-gray-500">Receives weekly email alerts • Created on April 28, 2023</p>
                          </div>
                          <div className="mt-3 md:mt-0 flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-gray-500">Delete</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
