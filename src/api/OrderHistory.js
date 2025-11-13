import axiosClient from "../config/axiosConfig";

// API lấy lịch sử đơn hàng với body là customerId
export const getOrderHistory = async (customerId) => {
  try {
    const response = await axiosClient.get(
      `/api/v1/my-orders?customerId=${customerId}`
    );
    return response;
  } catch (error) {
    console.error("API error:", error.message);
    throw error;
  }
}