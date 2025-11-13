import axiosClient from "../config/axiosConfig";

/**
 * Lấy danh sách Tỉnh/Thành
 * @param {number} requesterId
 */
export const getProvinces = async (requesterId) => {
  const res = await axiosClient.get(`/api/v1/shipping-utils/provinces`, {
    params: { requesterId },
  });
  return res;
};

/**
 * Lấy danh sách Quận/Huyện theo tỉnh
 * @param {number} requesterId
 * @param {number} provinceId
 */
export const getDistricts = async (requesterId, provinceId) => {
  const res = await axiosClient.get(`/api/v1/shipping-utils/districts`, {
    params: { requesterId, provinceId },
  });
  return res;
};

/**
 * Lấy danh sách Phường/Xã theo quận
 * @param {number} requesterId
 * @param {number} districtId
 */
export const getWards = async (requesterId, districtId) => {
  const res = await axiosClient.get(`/api/v1/shipping-utils/wards`, {
    params: { requesterId, districtId },
  });
  return res;
};
