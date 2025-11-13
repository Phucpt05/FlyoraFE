import axiosClient from "../config/axiosConfig";

export const createPayOSLink = async (orderId) => {
  const res = await axiosClient.post(`/api/payos/create-link/${orderId}`);
  return res;
};
