import axiosClient from 'config/axiosConfig';

export const LoginAPI = async (username, password) => {
  console.log('Login attempt:', username, password);
  try {
    const res = await axiosClient.post('/api/auth/login', {
      username,
      password
    });
    console.log('Login response:', res);
    return res;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

