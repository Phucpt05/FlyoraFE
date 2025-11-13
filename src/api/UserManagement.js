import axiosClient from "../config/axiosConfig";

export const UserAccounts = async (requesterId) => {
  try {
    const response = await axiosClient.get(
      `/api/v1/admin/accounts?requesterId=${requesterId}`
    );
    return response;
  } catch (error) {
    console.error("Failed:", error);
    throw error;
  }
}