import axiosClient from "../config/axiosConfig";

export const getProfile = async () => {
  const res = await axiosClient.get("/api/v1/profile");
  return res.data; // Return only the data part of the response
};