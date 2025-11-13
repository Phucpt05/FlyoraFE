import axiosClient from "../config/axiosConfig";

/**
 * Tạo thanh toán mới (COD hoặc VNPay)
 * @param {Object} paymentData - Gồm: orderId, customerId, paymentMethodId, amount (nếu VNPay)
 * @returns Trả về link thanh toán (vnpay) hoặc paymentId (COD)
 */
export const createPayment = async (paymentData) => {
  const res = await axiosClient.post("/api/v1/payments", paymentData);
  return res;
};

