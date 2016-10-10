import { ADD_NEW_ANNOTATION, RECEIVE_ALL_ANNOTATIONS } from '../actions/annotation_actions';
import merge from 'lodash/merge';

const defaultState = { annotations: [] };

const AnnotationsReducer = ( state = defaultState, action ) => {
  debugger
  switch(action.type) {

    case ADD_NEW_ANNOTATION:
      return merge({}, state, {annotations: [...state.annotations, action.annotation]});

    case RECEIVE_ALL_ANNOTATIONS:
      return merege({}, state, annotations: action.annotations);

    default:
      return state;
  }
};
