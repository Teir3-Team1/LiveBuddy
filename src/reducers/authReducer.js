import { LOGIN, LOGOUT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        currentUser:action.payload,
        isAuthenticated:true        
      };
    case LOGOUT:
      return {
        currentUser:{},
        isAuthenticated:false
      };
    default:
      return state;
  }
};
