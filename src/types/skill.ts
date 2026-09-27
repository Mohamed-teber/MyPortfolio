export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  experienceYears: number;
  highlight?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}
