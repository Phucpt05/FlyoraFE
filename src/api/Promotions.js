import axiosClient from "../config/axiosConfig";

/**
 * Lấy danh sách khuyến mãi
 * @returns {Promise<Array>} Danh sách khuyến mãi
 */
export const getPromotions = async (customerId) => {
  try {
    const response = await axiosClient.get("/api/v1/promotions", {
      params: {
        customerId,
      },
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách khuyến mãi:", error);
    throw error;
  }
};
