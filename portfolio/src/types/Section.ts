import { StaticImageData } from "next/image"

export interface SectionProps {
  id: string
}

export interface SectionLayoutProps {
  children?: React.ReactNode
  id: string
  classSection?: string
  classDiv?: string
}

export interface CardProps {
  id: number
  title: string;
  technologies: string[];
  description: string;
  linkRepo: string;
  linkDemo?: string;
  imageSrc: StaticImageData | string;
}

export interface JobProps {
  jobName: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
}