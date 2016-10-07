import { RECEIVE_ALL_SONGS, RECEIVE_ONE_SONG } from '../actions/song_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = { songs: [], errors: []};

const SongsReducer = (state=defaultState, action) => {
  // debugger
  switch(action.type) {

    case RECEIVE_ALL_SONGS:
      return merge({}, state, {songs: action.songs});

    case RECEIVE_ONE_SONG:
      return merge({}, state, {songs: [...state.songs, action.song]});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    default:
      return state;
  }
};

export default SongsReducer;
