import axiosClient from "../config/axiosConfig";

export const activateAccount = async (accountId, requesterId) => {
  try {
    const response = await axiosClient.put(
      `/api/v1/admin/accounts/${accountId}/activate?requesterId=${requesterId}`,
      {}
    );
    return response;
  } catch (error) {
    console.error("Error activating account:", error);
    throw error;
  }
};
