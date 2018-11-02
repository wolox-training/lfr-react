import { actionsTypes } from './actions';

const initialState = {
  isLogin: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.AUTH_LOGIN:
      return {
        ...state,
        isLogin: action.payload
      };
    default:
      return state;
  }
}
