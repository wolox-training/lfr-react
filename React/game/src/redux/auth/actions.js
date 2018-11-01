import authService from '@services/authService';

export const actionsTypes = {
  AUTH_LOGIN: 'AUTH_LOGIN'
};

const actionCreators = {
  onLogin: (email, password) => async dispatch => {
    const response = await authService.login(email, password);
    console.log(response);
    dispatch({
      type: actionsTypes.AUTH_LOGIN,
      payload: true
    });
  }
};

export default actionCreators;
