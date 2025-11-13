import axiosClient from "../config/axiosConfig";

export const getDashboardData = async () => {
  try {
    const response = await axiosClient.get("/api/v1/owner/dashboard/products/top-sales");
    return response;
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    throw error;
  }
};
