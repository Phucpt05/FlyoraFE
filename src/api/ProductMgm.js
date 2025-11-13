
import axiosClient from "../config/axiosConfig";
export const getAllProductsByOwner = async () => {
  const res = await axiosClient.get("/api/v1/owner/products");

  console.log("res:", res);

  return res; // Lỗi sẽ xảy ra nếu không có key "products"
};
