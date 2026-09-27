export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Contract"
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string;
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  details?: string;
}
