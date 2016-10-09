import { createAnnotation, CREATE_ANNOTATION,
   receiveOneAnnotation } from '../actions/annotation_actions';
import * as API from '../util/annotation_api_util';

const AnnotationMiddleware = ({ getState, dispatch }) => next => action => {
  let successCallback;
  switch(action.type) {
    case CREATE_ANNOTATION:
      successCallback = (annotation) => dispatch(receiveOneAnnotation(annotation));
      API.createAnnotation(action.annotation, successCallback);
      return next(action);

    default:
      return next(action);
  }


};

export default AnnotationMiddleware;
