import axiosClient from "../config/axiosConfig";

export const getProductOwners = async () => {
  try {
    const response = await axiosClient.get("/api/v1/owner/products");
    return response;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
