import { receiveCurrentUser, receiveErrors, REQUEST_CURRENT_USER, LOGIN, LOGOUT, SIGNUP  } from '../actions/session_actions';
import * as API from '../util/session_api_util';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const successCallback = user => {dispatch(receiveCurrentUser(user));};
  const errorCallback = xhr => {
    dispatch(receiveErrors(xhr.responseJSON));
  };

  switch(action.type) {
    case LOGIN:
      API.login(action.user, successCallback, errorCallback);
      return next(action);

    case LOGOUT:
      API.logout(() => next(action));
      break;

    case SIGNUP:
      API.signup(action.user, successCallback, errorCallback);
      return next(action);

    case REQUEST_CURRENT_USER:
      API.requestCurrentUser(action.id, successCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
