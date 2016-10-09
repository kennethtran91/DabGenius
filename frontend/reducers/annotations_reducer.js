import { RECEIVE_ONE_ANNOTATION } from '../actions/annotation_actions';
import merge from 'lodash/merge';

const defaultState = { annotations: [] };

const AnnotationsReducer = ( state = defaultState, action ) => {
  switch(action.type) {

    case RECEIVE_ONE_ANNOTATION:
      return merge({}, state, {annotationDetail: action.annotation});

    default:
      return state;
  }
};
