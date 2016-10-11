import { CREATE_ANNOTATION, addNewAnnotation, REQUEST_ALL_ANNOTATIONS, receiveAllAnnotations, REQUEST_ONE_ANNOTATION, receiveOneAnnotation } from '../actions/annotation_actions';
import * as API from '../util/annotation_api_util';

const AnnotationMiddleware = ({ getState, dispatch }) => next => action => {
  let successCallback;
  switch(action.type) {

    case CREATE_ANNOTATION:
      successCallback = (annotation) => dispatch(addNewAnnotation(annotation));
      API.createAnnotation(action.annotation, successCallback);
      return next(action);

    case REQUEST_ALL_ANNOTATIONS:
      successCallback = (annotations) => dispatch(receiveAllAnnotations(annotations));
      API.fetchAllAnnotations(action.id, successCallback);
      return next(action);

    // case REQUEST_ONE_ANNOTATION:
    //   successCallback = (annotation) => dispatch(receiveOneAnnotation(annotation));
    //   API.fetch
    default:
      return next(action);
  }


};

export default AnnotationMiddleware;
