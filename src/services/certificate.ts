import { api } from "../config/axios.config";

export interface Certificate {
  _id: string;
  name: string;
  description: string;
  image: string;
  imagePublicId: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CertificateResponse {
  status: string;
  data: Certificate[];
}

export const certificateApi = {
  getAllCertificates: async (): Promise<CertificateResponse> => {
    const response = await api.get("/certificate");
    return response.data;
  },
};
