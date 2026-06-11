export type Project = {
  title: string;
  description: string;
  image: string;
  semester: string;
  course?: string;
  tags?: string[];
  isThesis?: boolean;
  isHighlighted?: boolean;
  longDescription?: string;
  videoUrl?: string;
};