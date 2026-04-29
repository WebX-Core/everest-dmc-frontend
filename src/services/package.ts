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
    const response = await api.get(`/package/${slug}`);
    const packageData =
      response?.data?.data && !Array.isArray(response.data.data)
        ? response.data.data
        : response?.data?.data?.[0] ?? response?.data;
    if (!packageData) {
      throw new Error("Package not found");
    }

    // Some API responses return seasonalTrek as ID strings instead of populated objects.
    // Resolve those IDs so the package details UI can render title/description reliably.
    const seasonIds = Array.isArray(packageData.seasonalTrek)
      ? packageData.seasonalTrek.filter(
          (item: any) => typeof item === "string" && item
        )
      : [];

    if (seasonIds.length === 0) {
      return packageData;
    }

    try {
      const seasonalResponse = await api.get("/seasonal-trek");
      const seasonalItems = Array.isArray(seasonalResponse?.data?.data)
        ? seasonalResponse.data.data
        : Array.isArray(seasonalResponse?.data)
          ? seasonalResponse.data
          : [];

      const seasonalMap = new Map(
        seasonalItems
          .filter((item: any) => item && item._id)
          .map((item: any) => [item._id, item])
      );

      return {
        ...packageData,
        seasonalTrek: seasonIds
          .map((id: string) => seasonalMap.get(id))
          .filter(Boolean),
      };
    } catch {
      // Keep original data if seasonal endpoint is unavailable.
      return packageData;
    }
  },
};
