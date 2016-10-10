export const CREATE_ANNOTATION = "CREATE_ANNOTATION";
export const DELETE_ANNOTATION = "DELETE_ANNOTATION";
export const REQUEST_ALL_ANNOTATIONS = "REQUEST_ALL_ANNOTATIONS";
export const RECEIVE_ALL_ANNOTATIONS = "RECEIVE_ALL_ANNOTATIONS";
export const ADD_NEW_ANNOTATION = "ADD_NEW_ANNOTATION";


export const createAnnotation = (annotation) => {
  return {
    type: CREATE_ANNOTATION,
    annotation
  };
};

export const deleteAnnotation = () => {
  return {
    type: DELETE_ANNOTATION
  };
};

export const requestAllAnnotations = (id) => {
  return {
    type: REQUEST_ALL_ANNOTATIONS,
    id
  };
};

export const receiveAllAnnotations = (annotations) => {
  return {
    type: RECEIVE_ALL_ANNOTATIONS,
    annotations
  };
};

export const addNewAnnotation = (annotation) => {
  return {
    type: ADD_NEW_ANNOTATION,
    annotation
  };
};
