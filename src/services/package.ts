import { api } from "../config/axios.config";

export interface Package {
  _id: string;
  name: string;
  slug: string;
  coverImage: string;
  overview: string;
  activity: string;
  groupSize: string;
  vehicle: string;
  difficulty: string;
  accommodation: string;
  meal: string;
  location: string;
  duration: string;
  elevation: number;
  distance: number;
  makeBestSeller: boolean;
  bestSeller: boolean;
  top10Trek: boolean;
  isPopular: boolean;
  addToHome: boolean;
  note: string;
  routeMap: string;
  sortOrder: number;
  categoryId: {
    _id: string;
    name: string;
    slug: string;
  };
  subCategoryId: {
    _id: string;
    name: string;
    slug: string;
  };
  tripHighlight: string[];
  visitPlaces: string[];
  attraction: any[];
  itinerary: any[];
  seasonalTrek: any[];
  gearInfo: any[];
  importantNotice: any[];
  insurance: any[];
  addons: any[];
  videos: any[];
  faq: any[];
  exclusion: any[];
  inclusion: any[];
  requirements: any[];
  pax: any[];
  gallery: any[];
  fixedDates: any[];
  testimonial: any[];
  whyLoveThisTrek: any[];
  packageInfo: any[];
  createdAt: string;
  updatedAt: string;
}

export interface PackageResponse {
  status: string;
  data: Package[];
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

export const packageApi = {
  getAllPackages: async (): Promise<PackageResponse> => {
    const response = await api.get("/package");
    return response.data;
  },

  getPackageBySlug: async (slug: string): Promise<Package> => {
    const response = await api.get("/package");
    const packageData = response.data.data.find(
      (pkg: Package) => pkg.slug === slug
    );
    if (!packageData) {
      throw new Error("Package not found");
    }
    return packageData;
  },
};
