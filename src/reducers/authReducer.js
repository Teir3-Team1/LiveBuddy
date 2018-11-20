import {
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_TWITTER
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case LOGIN_WITH_GOOGLE:
    case LOGIN_WITH_FACEBOOK:
    case LOGIN_WITH_TWITTER:
      return {
        userId: action.userId
      };
    default:
      return state;
  }
};
