import { RECEIVE_ALL_SONGS, RECEIVE_ONE_SONG, ADD_NEW_SONG } from '../actions/song_actions';
import { ADD_NEW_ANNOTATION } from '../actions/annotation_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = { songs: [], songDetail: null, errors: []};

const SongsReducer = (state = defaultState, action) => {
  switch(action.type) {

    case RECEIVE_ALL_SONGS:
      return merge({}, state, {songs: action.songs});

    case ADD_NEW_SONG:
      return merge({}, state, {songs: [...state.songs, action.song]});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    case RECEIVE_ONE_SONG:
      return merge({}, state, {songDetail: action.song});

    case ADD_NEW_ANNOTATION:
      return merge({}, state, {
        songDetail: {annotations: [...state.songDetail.annotations, action.annotation]}
      })

    default:
      return state;
  }
};

export default SongsReducer;
