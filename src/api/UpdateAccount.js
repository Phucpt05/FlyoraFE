import axiosClient from "../config/axiosConfig";

export const updateAccount = async (
  id,
  requesterId,
  {
    username,
    password,
    email,
    phone,
    isActive,
    isApproved,
    roleId,
    roleName,
    approvedBy,
    name,
    otherInfo,
    shopOwnerId
  }
) => {
  try {
    const response = await axiosClient.put(
      `/api/v1/admin/accounts/${id}?requesterId=${requesterId}`,
      {
        username,
        password,
        email,
        phone,
        isActive,
        isApproved,
        roleId,
        roleName,
        approvedBy,
        name,
        otherInfo,
        shopOwnerId
      }
    );
    return response;
  } catch (error) {
    console.error("Failed to update account:", error);
    throw error;
  }
};



