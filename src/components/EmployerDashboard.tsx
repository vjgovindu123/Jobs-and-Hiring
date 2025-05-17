
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Users, User, Calendar, Search, BarChart } from 'lucide-react';

const EmployerDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Employer Dashboard</h1>
          <p className="text-gray-500">Manage your jobs and candidates</p>
        </div>
        <Button className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Jobs</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Applicants</p>
                <p className="text-3xl font-bold">487</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Interviews Scheduled</p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Profile Views</p>
                <p className="text-3xl font-bold">1,204</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <BarChart className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="jobs">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="jobs">My Jobs</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="jobs">
          <Card>
            <CardHeader>
              <CardTitle>Active Job Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{['Senior Developer', 'Marketing Manager', 'Product Designer'][i]}</h3>
                        <p className="text-gray-500 text-sm">Posted on {['May 15, 2023', 'May 12, 2023', 'May 10, 2023'][i]}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <div className="mr-4 flex items-center">
                          <Users className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm">{[24, 18, 32][i]} applicants</span>
                        </div>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="candidates">
          <Card>
            <CardHeader>
              <CardTitle>Recent Candidates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="font-semibold">{['Sarah Johnson', 'Michael Chen', 'Elena Rodriguez'][i]}</h3>
                            <p className="text-sm text-gray-500">{['Senior Frontend Developer', 'UX Designer', 'Product Manager'][i]}</p>
                          </div>
                          <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button size="sm">Contact</Button>
                          </div>
                        </div>
                        <div className="mt-2 text-sm">
                          <p className="text-gray-600">Applied for: {['Senior Developer', 'Product Designer', 'Marketing Manager'][i]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="interviews">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-semibold">{['Sarah Johnson', 'Michael Chen', 'Elena Rodriguez'][i]}</h3>
                        <p className="text-sm text-gray-500">
                          {['May 20, 2023 • 10:00 AM', 'May 21, 2023 • 2:30 PM', 'May 22, 2023 • 11:00 AM'][i]}
                        </p>
                        <p className="text-sm mt-1">For: {['Senior Developer', 'Product Designer', 'Marketing Manager'][i]}</p>
                      </div>
                      <div className="mt-3 sm:mt-0 flex items-center space-x-2">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button size="sm">Join Call</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmployerDashboard;
