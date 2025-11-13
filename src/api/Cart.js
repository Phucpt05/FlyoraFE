import axiosClient from "../config/axiosConfig";

// Lấy giỏ hàng
export const getCart = async (items) => {
  const params = new URLSearchParams();
  items.forEach((it) => {
    params.append("productId", it.id);
    params.append("quantity", it.qty);
  });
 const res = await axiosClient.get(`/api/v1/cart?${params.toString()}`);
  return res;
};


// Cập nhật số lượng
export const updateQty = async (productId, quantity) => {
  return await axiosClient.put(`/api/v1/cart/${productId}`, { quantity });
};

// Xoá sản phẩm
export const deleteItem = async (productId) => {
  return await axiosClient.delete(`/api/v1/cart/${productId}`);
};
