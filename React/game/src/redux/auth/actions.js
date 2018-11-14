import authService from '@services/authService';

import localStorageService from '../../services/localStorageService';

export const actionsTypes = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGIN_ERROR: 'AUTH_LOGIN_ERROR',
  LOADING_APP: 'LOADING_APP'
};

const actionCreators = {
  onLogin: (email, password) => async dispatch => {
    const response = await authService.login(email, password);
    if (response.ok) {
      const { id, userId } = response.data;
      localStorageService.setLocalStorage(id, userId);
      dispatch({
        type: actionsTypes.AUTH_LOGIN,
        payload: {
          isLogin: true,
          id,
          userId
        }
      });
    } else {
      const errorLogin = !!response.data.error;
      dispatch({
        type: actionsTypes.AUTH_LOGIN_ERROR,
        payload: {
          msgError: 'Usuario o Contraseña invalido',
          errorLogin
        }
      });
    }
  },
  loadingApp: () => dispatch => {
    const { isLogin, token, userId } = localStorageService.getLocalStorage();
    if (isLogin) {
      dispatch({
        type: actionsTypes.LOADING_APP,
        payload: {
          isLogin,
          token,
          userId
        }
      });
    }
  },
  logout: () => dispatch => {
    setLocalStorage(null, null);
    dispatch({
      type: actionsTypes.AUTH_LOGIN,
      payload: {
        isLogin: false
      }
    });
  }
};

export default actionCreators;
