import axiosClient from "../config/axiosConfig";

export const deleteProduct = async (id) => {
  try {
    const response = await axiosClient.delete(`/api/v1/owner/products/${id}`);
    return response;
  } catch (error) {
    console.error("Failed to delete product:", error);
    throw error;
  }
};