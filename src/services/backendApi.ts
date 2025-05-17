
import axios from 'axios';
import { toast } from "@/hooks/use-toast";
import { Job, JobSearchQuery } from './jobApi';

// Base API URL - update with your actual backend endpoint
const API_URL = "https://api.example.com/v1";

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchJobsFromBackend = async (query: JobSearchQuery): Promise<Job[]> => {
  try {
    // In production, this would be an actual API call:
    const response = await api.get('/jobs/search', { 
      params: {
        keyword: query.keyword,
        location: query.location,
        page: query.page || 1,
        limit: query.limit || 10
      }
    });
    
    return response.data.jobs;
  } catch (error) {
    console.error("Error searching jobs from backend:", error);
    toast({
      title: "API Error",
      description: "Failed to fetch jobs from the server. Please try again later.",
      variant: "destructive",
    });
    
    // For development purposes, fall back to mock data
    console.log("Falling back to mock data");
    
    // Import the mock data from jobApi for fallback
    const { searchJobs } = await import('./jobApi');
    return searchJobs(query);
  }
};

export const getJobByIdFromBackend = async (id: string): Promise<Job | null> => {
  try {
    // In production, this would be an actual API call:
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job details from backend:", error);
    toast({
      title: "API Error",
      description: "Failed to fetch job details from the server. Please try again later.",
      variant: "destructive",
    });
    
    // For development purposes, fall back to mock data
    console.log("Falling back to mock data");
    
    // Import the mock data from jobApi for fallback
    const { getJobById } = await import('./jobApi');
    return getJobById(id);
  }
};

// Add a user to create a job seeker profile
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  resume?: File;
  skills: string[];
  experience: number;
  education: string;
}

// Create or update user profile
export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<UserProfile> => {
  try {
    const response = await api.post('/users/profile', profile);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    toast({
      title: "Update Failed",
      description: "Failed to update your profile. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
};

// Apply for a job
export const applyForJob = async (jobId: string, userId: string, coverLetter?: string): Promise<boolean> => {
  try {
    await api.post('/applications', {
      jobId,
      userId,
      coverLetter,
      appliedDate: new Date().toISOString()
    });
    toast({
      title: "Application Submitted",
      description: "Your job application has been successfully submitted.",
    });
    return true;
  } catch (error) {
    console.error("Error applying for job:", error);
    toast({
      title: "Application Failed",
      description: "Failed to submit your application. Please try again later.",
      variant: "destructive",
    });
    return false;
  }
};
