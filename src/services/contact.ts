import { api } from "../config/axios.config";

export interface ContactFormData {
  name: string;
  email: string;
  goal: string;
  number: string;
  budget: string;
  company: string;
  message: string;
}

export interface ContactResponse {
  status: string;
  message: string;
}

export const contactApi = {
  submitContactForm: async (data: ContactFormData): Promise<ContactResponse> => {
    const response = await api.post("/contact", data);
    return response.data;
  },
};
