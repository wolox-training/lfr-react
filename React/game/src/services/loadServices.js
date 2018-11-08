import authService from '@services/authService';

const loadService = async (email, password) => {
  const response = await authService.login(email, password);
  const token = response.data.id;
  const userId = response.data.userId;
  localStorage.setItem('tokenAuth', token);
  localStorage.setItem('userId', userId);
};

export default loadService;
