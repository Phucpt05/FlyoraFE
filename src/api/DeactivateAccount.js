import axiosClient from "../config/axiosConfig";

export const deactivateAccount = async (accountId, requesterId) => {
  try {
    const response = await axiosClient.put(
      `/api/v1/admin/accounts/${accountId}/deactivate?requesterId=${requesterId}`,
      {}
    );
    return response;
  } catch (error) {
    console.error("Error deactivating account:", error);
    throw error;
  }
};
