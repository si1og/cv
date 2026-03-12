export interface Skill {
  name: string;
  link?: string;
  icon?: string;
}

export interface SkillBlockData {
  title: string;
  skills: Skill[];
  color?: SkillColor;
}

export type SkillColor = "blue" | "emerald" | "purple" | "amber" | "slate";

export interface EducationData {
  university: string;
  program: string;
  period: string;
  details: string[];
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  stack: string[];
  description?: string;
  link?: string;
}
