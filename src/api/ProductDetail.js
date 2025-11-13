import axiosClient from "../config/axiosConfig";
export const getProductDetail = async (id) => {
  try {
    const response = await axiosClient.get(`/api/v1/products/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}