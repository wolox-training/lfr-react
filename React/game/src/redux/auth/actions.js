import authService from '@services/authService';

import loadLocalStore from '../../services/loadServices';

export const actionsTypes = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGIN_ERROR: 'AUTH_LOGIN_ERROR',
  LOADING_APP: 'LOADING_APP'
};

const actionCreators = {
  onLogin: (email, password) => async dispatch => {
    const response = await authService.login(email, password);
    const token = response.data.id;
    const userId = response.data.userId;
    const errorLogin = !!response.data.error;
    loadLocalStore(token, userId);
    if (response.ok) {
      dispatch({
        type: actionsTypes.AUTH_LOGIN,
        payload: {
          isLogin: true,
          token,
          userId,
          errorLogin
        }
      });
    } else {
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
    const token = localStorage.getItem('tokenAuth');
    const isLogin = !!token;
    const userId = localStorage.getItem('userId');
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
  }
};

export default actionCreators;
