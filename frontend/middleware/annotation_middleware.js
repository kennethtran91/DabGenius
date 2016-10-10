import { CREATE_ANNOTATION, addNewAnnotation, REQUEST_ALL_ANNOTATIONS, receiveAllAnnotations } from '../actions/annotation_actions';
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
      API.fetchAllAnnotations(successCallback);
      return next(action);

    default:
      return next(action);
  }


};

export default AnnotationMiddleware;
