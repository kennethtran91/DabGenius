import { RECEIVE_ALL_SONGS, RECEIVE_ONE_SONG, ADD_NEW_SONG } from '../actions/song_actions';
import { ADD_NEW_ANNOTATION, UPDATE_ANNOTATION } from '../actions/annotation_actions';
import { ADD_NEW_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';
import _ from 'lodash';

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
      return Object.assign({}, state, {songDetail: action.song});

    case ADD_NEW_ANNOTATION:
      return merge({}, state, {
        songDetail: {annotations: [...state.songDetail.annotations, action.annotation]}
      });

    case UPDATE_ANNOTATION:
      const annotations = state.songDetail.annotations;
      const annoIndex = _.findIndex(annotations, ['id', action.annotation.id]);
      const firstHalf = annotations.slice(0, annoIndex);
      const secondHalf = annotations.slice(annoIndex + 1);
      return merge({}, state, {
        songDetail: {annotations: [...firstHalf, action.annotation, ...secondHalf]}
      });

    case ADD_NEW_COMMENT:
      const annoIdx = _.findIndex(state.songDetail.annotations,
      ['id', action.comment.annotation_id]);

      const firstPortion = state.songDetail.annotations.slice(0, annoIdx);
      const secondPortion = state.songDetail.annotations.slice(annoIdx + 1);
      const anno = state.songDetail.annotations[annoIdx];
      let newAnnotation;
      if (anno.comments) {
        newAnnotation = merge({}, anno, {comments: [action.comment, ...anno.comments]});
      } else {
        newAnnotation = merge({}, anno, {comments: [action.comment]});
      }

      return merge({}, state, {
        songDetail: {annotations: [...firstPortion, newAnnotation, ...secondPortion]}
      });

    default:
      return state;
  }
};

export default SongsReducer;
