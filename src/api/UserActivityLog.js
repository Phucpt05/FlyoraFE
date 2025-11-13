// src/api/UserActivityLog.js
import axiosClient from "../config/axiosConfig";
export const getUserActivityLogs = async (requesterId) => {
  try {
    const response = await axiosClient.get(
      `/api/v1/admin/accounts/logs?requesterId=${requesterId}`
    );
    return response;
  } catch (error) {
    console.error("Failed:", error);
    throw error;
  }
};