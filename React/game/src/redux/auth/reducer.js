import { actionsTypes } from './actions';

const initialState = {
  isLogin: false,
  msgError: null,
  token: null,
  userId: null,
  errorLogin: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.AUTH_LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case actionsTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case actionsTypes.LOADING_APP:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
