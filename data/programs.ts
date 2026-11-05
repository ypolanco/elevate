import { images, type SiteImage } from "@/data/images";

export type Program = {
  id: string;
  title: string;
  grades?: string;
  summary: string;
  image: SiteImage;
  href: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    id: "elementary",
    title: "Elementary Education",
    grades: "Grades K–5",
    summary:
      "Strong foundations in literacy, mathematics, science, and social-emotional development.",
    image: images.elementaryReading,
    href: "/academics#elementary",
    highlights: [
      "Structured literacy and daily guided reading",
      "Hands-on, concept-first mathematics",
      "Morning meeting and social-emotional learning",
      "Small-group instruction and intervention blocks",
    ],
  },
  {
    id: "middle-school",
    title: "Middle School",
    grades: "Grades 6–8",
    summary:
      "Challenging academics, leadership opportunities, and preparation for high school success.",
    image: images.middleSchoolWriting,
    href: "/academics#middle-school",
    highlights: [
      "Advanced math pathways, including high school–level coursework",
      "Writing-intensive humanities and research projects",
      "Advisory program and student leadership roles",
      "High school transition planning in 8th grade",
    ],
  },
  {
    id: "stem",
    title: "STEM & Innovation",
    summary:
      "Hands-on science, technology, engineering, and mathematical exploration.",
    image: images.stemCoding,
    href: "/academics#stem",
    highlights: [
      "Weekly lab-based science in every grade",
      "Coding and robotics beginning in kindergarten",
      "Engineering design challenges each quarter",
      "Annual STEM showcase for families",
    ],
  },
  {
    id: "arts",
    title: "Arts & Enrichment",
    summary:
      "Visual arts, music, physical education, and experiences that support the whole child.",
    image: images.artsSupplies,
    href: "/academics#arts",
    highlights: [
      "Visual art and music for every student, every week",
      "Daily movement and physical education",
      "Library and media literacy",
      "Seasonal performances and exhibitions",
    ],
  },
];
