export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  role: string;
  year: string;
  tools: string[];
  coverMedia: {
    type: "image" | "video";
    url: string;
  };
  overview: string;
  challenge: string;
  solution: string;
  brandColors?: string[]; // Array warna Hex, e.g. ["#1A1A1A", "#EC4899", "#F3F4F6"]
  typography?: {
    fontFamily: string;
    description: string;
  };
  gallery: {
    type: "image" | "video";
    url: string;
    caption?: string;
    aspectRatio?: "landscape" | "portrait" | "square";
  }[];
  results?: {
    metric: string;
    label: string;
  }[];
  nextProject?: {
    id: string;
    title: string;
    cover: string;
  };
}