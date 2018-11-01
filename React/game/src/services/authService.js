import api from '@config/api';

const LOGIN_PATH = '/api/Users/login';
const service = {
  login: (email, password) => api.post(LOGIN_PATH, { email, password })
};

export default service;
