export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  features: string[];
  category: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  exam: string;
  rating: number;
  review: string;
  date: string;
  isVerified?: boolean;
}

export interface Result {
  id: string;
  name: string;
  examName: string;
  year: string;
  achievement: string; // e.g., "Selected in SSC CGL", "CTET Qualified"
  rankPlaceholder?: string; // e.g., "Rank 145" or "Score 128/150"
  image?: string;
  isTopPerformer?: boolean;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'classroom' | 'students' | 'faculty' | 'events' | 'seminars' | 'celebrations' | 'results';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email?: string;
  phone: string;
  course: string;
  message: string;
  date: string;
  status: 'pending' | 'contacted' | 'resolved';
}

export interface YouTubeVideo {
  id: string;
  title: string;
  videoId: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
}

export interface SystemStats {
  studentsCoached: number;
  selectionsCount: number;
  successRate: string;
  googleRating: number;
}
