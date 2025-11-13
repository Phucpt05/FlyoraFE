import axiosClient from "../config/axiosConfig";

export const deleteAccount = async (id, requesterId) => {
  try {
    const response = await axiosClient.delete(
      `/api/v1/admin/accounts/${id}?requesterId=${requesterId}`
    );
    return response;
  } catch (error) {
    console.error("Failed to delete account:", error);
    throw error;
  }
};