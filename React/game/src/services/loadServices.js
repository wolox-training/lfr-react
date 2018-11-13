const loadLocalStore = (token, userId) => {
  localStorage.setItem('tokenAuth', token);
  localStorage.setItem('userId', userId);
};

export default loadLocalStore;
