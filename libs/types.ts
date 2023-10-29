export interface TechStack {
  id: number,
  name: string,
  imageUrl: string,
  category: string[]
}

export interface ExperienceData {
  companyName: string,
  companyLogoUrl: string,
  title: string,
  workingPeriod: string,
  jobDescriptions: string[],
  skills: { imageUrl: string, name: string }[]
  testimonials: { imageUrl: string; name: string, position: string, words: string, linkedInUrl: string }[]
}

export interface WorkData {
  name: string,
  description: string,
  category: string,
  imageUrls: string[],
  isLive: boolean,
  skills: { imageUrl: string, name: string }[],
  link: string
}