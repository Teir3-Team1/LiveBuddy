import { LOGIN_WITH_GOOGLE } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case LOGIN_WITH_GOOGLE:
      return {
        userId: action.userId
      };
    default:
      return state;
  }
};
