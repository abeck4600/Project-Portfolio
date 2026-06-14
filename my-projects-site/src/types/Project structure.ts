export type Project = {
  title: string;
  description: string;
  image: string;
  imageMode?: "contain" | "cover";
  mobileImagePosition?: string;
  mobileImageFrame?: "standard" | "compact";
  semester: string;
  course?: string;
  tags?: string[];
  isThesis?: boolean;
  isHighlighted?: boolean;
  isCompanyCollaboration?: boolean;
  isFeatured?: boolean;
  longDescription?: string;
  videoUrl?: string;
  articleUrl?: string;
};