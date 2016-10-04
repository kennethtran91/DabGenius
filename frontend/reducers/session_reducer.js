import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = { currentUser: null, errors: [] };

export const SessionReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = {currentUser: action.currentUser, errors: []};
      return merge({}, state, newState);

    case RECEIVE_ERRORS:
      return ({currentUser: null, errors: action.errors});

    case LOGOUT:
      return merge({}, state, defaultState);

    default:
      return defaultState;
  }
};
