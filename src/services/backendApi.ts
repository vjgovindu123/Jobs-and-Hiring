
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

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
  title?: string;
  location?: string;
  photo?: string;
}

// Authentication interfaces
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: UserProfile;
  token: string;
}

// Login user
export const loginUser = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  try {
    const response = await api.post('/auth/login', credentials);
    
    // Store the token in localStorage
    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('currentUser', JSON.stringify(response.data.user));
    
    toast({
      title: "Login Successful",
      description: "Welcome back! You have successfully logged in.",
    });
    
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    toast({
      title: "Login Failed",
      description: "Incorrect email or password. Please try again.",
      variant: "destructive",
    });
    throw error;
  }
};

// Register user
export const registerUser = async (userData: AuthCredentials & { name: string }): Promise<AuthResponse> => {
  try {
    const response = await api.post('/auth/register', userData);
    
    // Store the token in localStorage
    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('currentUser', JSON.stringify(response.data.user));
    
    toast({
      title: "Registration Successful",
      description: "Your account has been created successfully!",
    });
    
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    toast({
      title: "Registration Failed",
      description: "Could not create your account. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
};

// Logout user
export const logoutUser = (): void => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('currentUser');
  
  toast({
    title: "Logged Out",
    description: "You have been logged out successfully.",
  });
};

// Get current user profile
export const getCurrentUserProfile = async (): Promise<UserProfile | null> => {
  // First try to get from localStorage for immediate UI update
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    return JSON.parse(storedUser);
  }

  try {
    const response = await api.get('/users/profile');
    
    // Update localStorage with latest data
    localStorage.setItem('currentUser', JSON.stringify(response.data));
    
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    
    // If 401 (unauthorized), clear local storage
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
      
      toast({
        title: "Session Expired",
        description: "Please login again to continue.",
        variant: "destructive",
      });
    }
    
    return null;
  }
};

// Create or update user profile
export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<UserProfile> => {
  try {
    const response = await api.post('/users/profile', profile);
    
    // Update localStorage with latest data
    localStorage.setItem('currentUser', JSON.stringify(response.data));
    
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

// Get user applications
export const getUserApplications = async (): Promise<any[]> => {
  try {
    const response = await api.get('/users/applications');
    return response.data;
  } catch (error) {
    console.error("Error fetching user applications:", error);
    toast({
      title: "Error",
      description: "Failed to fetch your applications. Please try again later.",
      variant: "destructive",
    });
    
    // Return mock data during development
    return [
      {
        id: "app1",
        jobId: "1",
        jobTitle: "Frontend Developer",
        company: "TechGrowth Inc.",
        appliedDate: "2025-05-15T00:00:00.000Z",
        status: "Under Review"
      },
      {
        id: "app2",
        jobId: "3",
        jobTitle: "UX/UI Designer",
        company: "CreativeMinds",
        appliedDate: "2025-05-10T00:00:00.000Z",
        status: "Viewed"
      },
      {
        id: "app3",
        jobId: "5",
        jobTitle: "Product Manager",
        company: "InnovateNow",
        appliedDate: "2025-05-05T00:00:00.000Z",
        status: "Interview Scheduled",
        interviewDate: "2025-05-22T17:00:00.000Z"
      }
    ];
  }
};

// Get user saved jobs
export const getUserSavedJobs = async (): Promise<Job[]> => {
  try {
    const response = await api.get('/users/saved-jobs');
    return response.data;
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
    toast({
      title: "Error",
      description: "Failed to fetch your saved jobs. Please try again later.",
      variant: "destructive",
    });
    
    // Return mock data during development
    // Import the mock data from jobApi for fallback
    const { mockJobs } = await import('./jobApi');
    return [mockJobs[0], mockJobs[4]];
  }
};

// Save a job
export const saveJob = async (jobId: string): Promise<boolean> => {
  try {
    await api.post(`/jobs/${jobId}/save`);
    
    toast({
      title: "Job Saved",
      description: "This job has been added to your saved jobs.",
    });
    
    return true;
  } catch (error) {
    console.error("Error saving job:", error);
    toast({
      title: "Error",
      description: "Failed to save this job. Please try again later.",
      variant: "destructive",
    });
    
    return false;
  }
};

// Remove a saved job
export const removeSavedJob = async (jobId: string): Promise<boolean> => {
  try {
    await api.delete(`/jobs/${jobId}/save`);
    
    toast({
      title: "Job Removed",
      description: "This job has been removed from your saved jobs.",
    });
    
    return true;
  } catch (error) {
    console.error("Error removing saved job:", error);
    toast({
      title: "Error",
      description: "Failed to remove this job. Please try again later.",
      variant: "destructive",
    });
    
    return false;
  }
};
