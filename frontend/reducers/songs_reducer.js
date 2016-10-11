import { RECEIVE_ALL_SONGS, RECEIVE_ONE_SONG, ADD_NEW_SONG } from '../actions/song_actions';
import { ADD_NEW_ANNOTATION, RECEIVE_ONE_ANNOTATION } from '../actions/annotation_actions';
import { ADD_NEW_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';
import _ from 'lodash';

const defaultState = { songs: [], songDetail: {annotations: []}, errors: []};

const SongsReducer = (state = defaultState, action) => {
  debugger
  switch(action.type) {

    case RECEIVE_ALL_SONGS:
      return merge({}, state, {songs: action.songs});

    case ADD_NEW_SONG:
      return merge({}, state, {songs: [...state.songs, action.song]});

    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});

    case RECEIVE_ONE_SONG:
      return Object.assign({}, state, {songDetail: action.song});

    case ADD_NEW_ANNOTATION:
      return merge({}, state, {
        songDetail: {annotations: [...state.songDetail.annotations, action.annotation]}
      });

    // case RECEIVE_ONE_ANNOTATION:

    case ADD_NEW_COMMENT:

    const annoIndex = _.findIndex(state.songDetail.annotations,
    ['id', action.comment.annotation_id])

    const firstHalf = state.songDetail.annotations.slice(0, annoIndex)
    const secondHalf = state.songDetail.annotations.slice(annoIndex + 1, state.songDetail.annotations.length)
    const anno = state.songDetail.annotations[annoIndex];


      return Object.assign({}, state, {
        songDetail: {annotations: {
          comments: [...state.songDetail.annotations.comments, action.comment]
        }}
      });

    default:
      return state;
  }
};

export default SongsReducer;
