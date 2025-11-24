import { api } from "../config/axios.config";

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  banner: string;
  description: string;
  sortOrder: number;
  estimatedReadTime: number;
  author: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogResponse {
  status: string;
  data: BlogPost[];
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

export const blogApi = {
  getAllBlogs: async (): Promise<BlogResponse> => {
    const response = await api.get("/blog");
    return response.data;
  },

  getBlogBySlug: async (slug: string): Promise<BlogPost> => {
    const response = await api.get("/blog");
    const blog = response.data.data.find((post: BlogPost) => post.slug === slug);
    if (!blog) {
      throw new Error("Blog not found");
    }
    return blog;
  },
};
