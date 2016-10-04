import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import { merge } from 'lodash/merge';

const defaultState = { currentUser: null, errors: [] };

export const SessionReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser, errors: []});

    case RECEIVE_ERRORS:
      return ({currentUser: null, errors: action.errors});

    case LOGOUT:
      return defaultState;
  }
};
