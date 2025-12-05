import { api } from "../config/axios.config";

export interface Testimonial {
  _id: string;
  fullName: string;
  image?: string;
  rating: number;
  comment: string;
  isActive: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
  // Optional fields for backward compatibility
  company?: string;
  representative?: string;
  position?: string;
  country?: string;
  logo?: string;
  text?: string;
  partnership?: string;
  date?: string;
}

export interface TestimonialResponse {
  status: string;
  data: Testimonial[];
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextPage: number | null;
    previousPage: number | null;
  };
  fromCache: boolean;
}

export const testimonialApi = {
  getAllTestimonials: async (): Promise<TestimonialResponse> => {
    const response = await api.get("/home-testimonial");
    return response.data;
  },
};