import { LOGIN, LOGOUT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        userId: action.userId
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
