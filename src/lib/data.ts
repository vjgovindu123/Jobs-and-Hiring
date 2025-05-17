
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  logo: string;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export interface Employer {
  id: string;
  name: string;
  logo: string;
  location: string;
  industry: string;
  description: string;
  website: string;
}

export interface JobSeeker {
  id: string;
  name: string;
  title: string;
  location: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    duration: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  photo?: string;
}

// Mock job data
export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechGrowth Inc.',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for an experienced Frontend Developer to join our growing team. You will be responsible for building responsive web applications with modern JavaScript frameworks.',
    requirements: [
      'Over 5 years of experience with React.js',
      'Strong understanding of state management in complex applications',
      'Experience with TypeScript and modern JavaScript features',
      'Knowledge of UI/UX design principles'
    ],
    benefits: [
      'Competitive salary and equity options',
      'Remote-first culture with flexible hours',
      'Health, dental, and vision insurance',
      'Generous vacation policy'
    ],
    postedDate: '2 days ago',
    logo: '/placeholder.svg',
    featured: true
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateNow',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$110,000 - $130,000',
    description: 'Join our product team to help shape the future of our cutting-edge SaaS platform. You will work closely with engineering, design, and customer success teams.',
    requirements: [
      'At least 3 years of product management experience',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership abilities',
      'Experience with agile methodologies'
    ],
    benefits: [
      'Competitive compensation package',
      'Career growth opportunities',
      'Comprehensive benefits package',
      'Regular team events and retreats'
    ],
    postedDate: '1 week ago',
    logo: '/placeholder.svg',
    featured: false
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'CreativeMinds',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'We are seeking a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have a strong portfolio showcasing their design skills.',
    requirements: [
      'Strong portfolio demonstrating UI/UX projects',
      'Experience with Figma, Sketch, or similar design tools',
      'Understanding of user-centered design principles',
      'Ability to translate business requirements into design solutions'
    ],
    benefits: [
      'Fully remote position',
      'Flexible working hours',
      'Professional development budget',
      'Latest equipment and software'
    ],
    postedDate: '3 days ago',
    logo: '/placeholder.svg',
    featured: true
  },
  {
    id: '4',
    title: 'Backend Developer',
    company: 'DataCore Systems',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $140,000',
    description: 'Looking for an experienced backend developer to help build scalable services. You will work on high-performance systems handling millions of daily transactions.',
    requirements: [
      'Strong knowledge of Node.js or Python',
      'Experience with SQL and NoSQL databases',
      'Understanding of microservice architecture',
      'Knowledge of cloud platforms (AWS, Azure, or GCP)'
    ],
    benefits: [
      'Competitive salary',
      'Stock options',
      'Comprehensive health coverage',
      '401(k) matching'
    ],
    postedDate: '1 week ago',
    logo: '/placeholder.svg',
    featured: false
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    company: 'GrowthHackers',
    location: 'Chicago, IL (Hybrid)',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    description: 'Join our marketing team to help drive user acquisition and retention strategies. You will be responsible for planning and executing marketing campaigns across multiple channels.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      'At least 2 years of digital marketing experience',
      'Knowledge of SEO, SEM, and social media marketing',
      'Analytical mindset with experience in marketing analytics tools'
    ],
    benefits: [
      'Hybrid work model (3 days in office, 2 remote)',
      'Professional development opportunities',
      'Health and wellness programs',
      'Company-sponsored social events'
    ],
    postedDate: '5 days ago',
    logo: '/placeholder.svg',
    featured: false
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'We are looking for a data scientist to join our research team. You will develop machine learning models and analyze large datasets to derive meaningful insights.',
    requirements: [
      'Advanced degree in Statistics, Computer Science, or related field',
      'Strong programming skills in Python or R',
      'Experience with machine learning frameworks like TensorFlow or PyTorch',
      'Knowledge of data visualization tools'
    ],
    benefits: [
      'Top-tier compensation package',
      'Flexible work arrangements',
      'Continuous learning opportunities',
      'Modern office with state-of-the-art facilities'
    ],
    postedDate: '2 weeks ago',
    logo: '/placeholder.svg',
    featured: false
  }
];

// Job categories
export const categories: Category[] = [
  { id: '1', name: 'Technology', count: 1250, icon: '💻' },
  { id: '2', name: 'Marketing', count: 842, icon: '📊' },
  { id: '3', name: 'Finance', count: 632, icon: '💰' },
  { id: '4', name: 'Healthcare', count: 531, icon: '🏥' },
  { id: '5', name: 'Education', count: 480, icon: '🎓' },
  { id: '6', name: 'Design', count: 392, icon: '🎨' }
];

// Employer data
export const employers: Employer[] = [
  {
    id: '1',
    name: 'TechGrowth Inc.',
    logo: '/placeholder.svg',
    location: 'San Francisco, CA',
    industry: 'Software Development',
    description: 'A leading tech company specializing in innovative SaaS solutions.',
    website: 'https://example.com/techgrowth'
  },
  {
    id: '2',
    name: 'InnovateNow',
    logo: '/placeholder.svg',
    location: 'New York, NY',
    industry: 'Technology',
    description: 'Creating next-generation technology products for businesses worldwide.',
    website: 'https://example.com/innovatenow'
  }
];

// Job seeker profile
export const jobSeeker: JobSeeker = {
  id: '1',
  name: 'Alex Johnson',
  title: 'Senior Software Engineer',
  location: 'San Francisco, CA',
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL'],
  experience: [
    {
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2019 - Present',
      description: 'Developed and maintained complex web applications using React.js and Node.js.'
    },
    {
      title: 'Frontend Developer',
      company: 'WebDev Agency',
      duration: 'Mar 2016 - Dec 2018',
      description: 'Built responsive interfaces and worked with various frontend technologies.'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      year: '2016'
    }
  ]
};
