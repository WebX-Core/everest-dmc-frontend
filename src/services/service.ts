import { api } from "../config/axios.config";

export interface Service {
  _id: string;
  title: string;
  description: string;
  slug: string;
  coverImage: {
    url: string;
    publicId: string;
  };
  images: any[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceResponse {
  status: string;
  data: Service[];
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

export const serviceApi = {
  getAllServices: async (): Promise<ServiceResponse> => {
    const response = await api.get("/service");
    return response.data;
  },

  getServiceBySlug: async (slug: string): Promise<Service> => {
    const response = await api.get("/service");
    const service = response.data.data.find((s: Service) => s.slug === slug);
    if (!service) {
      throw new Error("Service not found");
    }
    return service;
  },
};