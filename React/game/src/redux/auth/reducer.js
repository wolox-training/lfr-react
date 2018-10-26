import { actionsTypes } from './actions';

const initialState = {
  hasError: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.AUTH_LOGIN:
      return {
        ...state,
        hasError: action.payload
      };
    default:
      return state;
  }
}
