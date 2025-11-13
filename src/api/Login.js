import axiosClient from 'config/axiosConfig';

export const LoginAPI = async (username, password) => {

  console.log(username, password);
  const res = await axiosClient.post('/api/auth/login', {
    username,
    password
  });

  return res;
};

