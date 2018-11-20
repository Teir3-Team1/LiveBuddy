import { LOGIN } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        userId: action.userId
      };
    default:
      return state;
  }
};
