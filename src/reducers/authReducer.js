import {
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_TWITTER,
  LOGIN_WITH_GITHUB
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case LOGIN_WITH_GOOGLE:
    case LOGIN_WITH_FACEBOOK:
    case LOGIN_WITH_TWITTER:
    case LOGIN_WITH_GITHUB:
      return {
        userId: action.userId
      };
    default:
      return state;
  }
};
