// src/api/UpdateProfile.js
import axiosClient from "../config/axiosConfig";

export const updateProfile = async (data) => {
  const response = await axiosClient.put("/api/v1/profile", data);
  return response;
};
