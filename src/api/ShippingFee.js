// src/api/ShippingFee.js
import axiosClient from "../config/axiosConfig";

export const ShippingFee = async (requesterId, data) => {
  const res = await axiosClient.post(
    `/api/v1/shipping-utils/calculate-fee?requesterId=${requesterId}`,
    data
  );
  return res;
};
