export const actionsTypes = {
  AUTH_LOGIN: 'AUTH_LOGIN'
};

const actionCreators = {
  submit: state => ({
    type: actionsTypes.AUTH_LOGIN,
    payload: state
  }),
  onLogin: () => dispatch => {
    dispatch({
      type: actionsTypes.AUTH_LOGIN,
      payload: true
    });
  }
};

export default actionCreators;
