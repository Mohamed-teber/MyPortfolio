export interface Project {
  id: string;
  title: string;
  category: 'M365' | 'Virtualization' | 'Directory & Security' | 'Networking' | 'Disaster Recovery';
  summary: string;
  image: string;
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  architectureDetails: string[];
  outcome: string;
  date: string;
  featured?: boolean;
}
