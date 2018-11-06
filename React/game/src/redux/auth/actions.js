import authService from '@services/authService';

export const actionsTypes = {
  AUTH_LOGIN: 'AUTH_LOGIN',
  AUTH_LOGIN_ERROR: 'AUTH_LOGIN_ERROR'
};

const actionCreators = {
  onLogin: (email, password) => async dispatch => {
    const response = await authService.login(email, password);
    const token = response.data.id;
    const userId = response.data.userId;
    if (response.ok) {
      localStorage.setItem('tokenAuth', token);
      localStorage.setItem('userId', userId);
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
  }
};

export default actionCreators;
