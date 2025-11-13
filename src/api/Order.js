import axiosClient from "../config/axiosConfig";

/**
 * Tạo đơn hàng mới
 * @param {number} customerId
 * @param {Array} items - [{ productId, quantity }]
 * @returns { orderId, status }
 */
export const createOrder = async (customerId, items) => {
  const res = await axiosClient.post("/api/v1/orders", {
    customerId,
    items,
  });

  return res;
};