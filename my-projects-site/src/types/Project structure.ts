export type Project = {
  title: string;
  description: string;
  image: string;
  imageMode?: "contain" | "cover";
  mobileImagePosition?: string;
  semester: string;
  course?: string;
  tags?: string[];
  isThesis?: boolean;
  isHighlighted?: boolean;
  isCompanyCollaboration?: boolean;
  isFeatured?: boolean;
  longDescription?: string;
  readMoreUrl?: string;
  readMoreLabel?: string;
  videoUrl?: string;
  articleUrl?: string;
};