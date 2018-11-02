import { actionsTypes } from './actions';

const initialState = {
  isLogin: false,
  msgError: null
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
    default:
      return state;
  }
}
