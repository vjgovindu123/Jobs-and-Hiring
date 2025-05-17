
import { toast } from "@/hooks/use-toast";

export interface JobSearchQuery {
  keyword: string;
  location: string;
  page?: number;
  limit?: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  requirements: string[];
  postedDate: string;
  logo?: string;
}

// Base API URL - in a real app, this would be your backend API endpoint
const API_URL = "https://api.example.com/jobs";

export const searchJobs = async (query: JobSearchQuery): Promise<Job[]> => {
  try {
    // In a real implementation, this would be an actual API call:
    // const response = await fetch(`${API_URL}/search?${new URLSearchParams({
    //   keyword: query.keyword,
    //   location: query.location,
    //   page: String(query.page || 1),
    //   limit: String(query.limit || 10)
    // })}`);
    // 
    // if (!response.ok) throw new Error('Failed to fetch jobs');
    // return await response.json();

    // For now, simulate API response with mock data
    console.log("Searching jobs with query:", query);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock data
    return mockJobs.filter(job => {
      const matchesKeyword = !query.keyword || 
        job.title.toLowerCase().includes(query.keyword.toLowerCase()) || 
        job.company.toLowerCase().includes(query.keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(query.keyword.toLowerCase());
      
      const matchesLocation = !query.location || 
        job.location.toLowerCase().includes(query.location.toLowerCase());
      
      return matchesKeyword && matchesLocation;
    });
    
  } catch (error) {
    console.error("Error searching jobs:", error);
    toast({
      title: "Error",
      description: "Failed to search jobs. Please try again later.",
      variant: "destructive",
    });
    return [];
  }
};

export const getJobById = async (id: string): Promise<Job | null> => {
  try {
    // In a real implementation, this would be an actual API call:
    // const response = await fetch(`${API_URL}/${id}`);
    // if (!response.ok) throw new Error('Failed to fetch job details');
    // return await response.json();

    // For now, simulate API response with mock data
    console.log("Fetching job details for ID:", id);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const job = mockJobs.find(job => job.id === id);
    return job || null;
    
  } catch (error) {
    console.error("Error fetching job details:", error);
    toast({
      title: "Error",
      description: "Failed to fetch job details. Please try again later.",
      variant: "destructive",
    });
    return null;
  }
};

// Mock data for demonstration
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "We are looking for a skilled frontend developer to join our team and help build responsive web applications.",
    requirements: [
      "3+ years of experience with React",
      "Strong knowledge of HTML, CSS, and JavaScript",
      "Experience with RESTful APIs"
    ],
    postedDate: "2025-04-29",
    logo: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description: "Join our backend team to develop scalable APIs and microservices.",
    requirements: [
      "4+ years experience with Node.js or Python",
      "Experience with SQL and NoSQL databases",
      "Knowledge of cloud services (AWS, Azure, or GCP)"
    ],
    postedDate: "2025-05-02",
    logo: "/placeholder.svg"
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Remote",
    type: "Contract",
    salary: "$90,000 - $120,000",
    description: "Design intuitive and attractive user interfaces for web and mobile applications.",
    requirements: [
      "Portfolio showing UX/UI projects",
      "Proficiency with Figma, Sketch, or Adobe XD",
      "Understanding of user-centered design principles"
    ],
    postedDate: "2025-05-10",
    logo: "/placeholder.svg"
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "Cloud Systems Inc",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$140,000 - $170,000",
    description: "Manage our cloud infrastructure and CI/CD pipelines to ensure smooth deployments.",
    requirements: [
      "Experience with AWS or Azure services",
      "Knowledge of Docker and Kubernetes",
      "Familiar with CI/CD tools like Jenkins or GitHub Actions"
    ],
    postedDate: "2025-05-12",
    logo: "/placeholder.svg"
  },
  {
    id: "5",
    title: "Product Manager",
    company: "InnovateTech",
    location: "Seattle, WA",
    type: "Full-time",
    description: "Lead product development from conception to launch, working with cross-functional teams.",
    requirements: [
      "3+ years of product management experience",
      "Strong analytical and communication skills",
      "Experience with Agile methodologies"
    ],
    postedDate: "2025-05-15",
    logo: "/placeholder.svg"
  }
];
