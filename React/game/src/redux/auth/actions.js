import authService from '@services/authService';

import loadService from '../../services/loadServices';

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
    if (response.ok) {
      loadService(email, password);
      dispatch({
        type: actionsTypes.AUTH_LOGIN,
        payload: {
          isLogin: true,
          token,
          userId
        }
      });
    } else {
      dispatch({
        type: actionsTypes.AUTH_LOGIN_ERROR,
        payload: {
          msgError: 'Usuario o Constaseña invalido'
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
