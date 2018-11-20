const localStoreService = {
  setLocalStorage: (token, userId) => {
    localStorage.setItem('tokenAuth', token);
    localStorage.setItem('userId', userId);
  },

  getLocalStorage: () => {
    const token = localStorage.getItem('tokenAuth');
    const userId = localStorage.getItem('userId');
    const isLogin = !!token;
    return {
      token,
      userId,
      isLogin
    };
  }
};

export default localStoreService;
