import axios from "axios";
import axiosClient from "config/axiosConfig";

export const addNewAccount = async (
  requesterId,
  {
    username,
    password,
    email,
    phone,
    roleId,
    roleName,
    approvedBy,
    name,
    otherInfo,
    shopOwnerId
  }
) => {
  try {
    const response = await axiosClient.post(
      `/api/v1/admin/accounts?requesterId=${requesterId}`,
      {
        username,
        password,
        email,
        phone,
        roleId,
        roleName,
        approvedBy,
        name,
        otherInfo,
        shopOwnerId
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to add new account:", error);
    throw error;
  }
};
