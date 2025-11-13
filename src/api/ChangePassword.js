import axiosClient from "../config/axiosConfig";

export const changePassword = async (currentPassword, newPassword) => {
  const response = await axiosClient.put("/api/v1/profile/password", {
    currentPassword,
    newPassword,
  });
  return response;
};
