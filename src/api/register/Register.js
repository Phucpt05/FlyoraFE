import axiosClient from "../../config/axiosConfig";

export const RegisterAPI = async (username, email, password, phone, name) => {
  try {
    const res = await axiosClient.post('/api/auth/register', {
      username,
      password,
      email,
      phone,
      name,
    });

    return res;
  } catch (error) {
    // In lỗi chi tiết
    if (error.response) {
      console.error('Lỗi từ API:', error.response.data);
      return error.response.data;
    } else {
      console.error('Lỗi không phản hồi:', error.message);
      return { error: error.message };
    }
  }
};
