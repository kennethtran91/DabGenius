export const CREATE_ANNOTATION = "CREATE_ANNOTATION";
export const DELETE_ANNOTATION = "DELETE_ANNOTATION";
export const REQUEST_ALL_ANNOTATIONS = "REQUEST_ALL_ANNOTATIONS";
export const RECEIVE_ALL_ANNOTATIONS = "RECEIVE_ALL_ANNOTATIONS";
export const ADD_NEW_ANNOTATION = "ADD_NEW_ANNOTATION";
export const REQUEST_ONE_ANNOTATION = "REQUEST_ONE_ANNOTATION";
export const RECEIVE_ONE_ANNOTATION = "RECEIVE_ONE_ANNOTATION";
export const UPVOTE_ANNOTATION = "UPVOTE_ANNOTATION";
export const DOWNVOTE_ANNOTATION = "DOWNVOTE_ANNOTATION";
export const UPDATE_ANNOTATION = "UPDATE_ANNOTATION";

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

export const upvoteAnnotation = (id) => {
  return {
    type: UPVOTE_ANNOTATION,
    id
  };
};

export const downvoteAnnotation = (id) => {
  return {
    type: DOWNVOTE_ANNOTATION,
    id
  };
};

export const updateAnnotation = (annotation) => {
  return {
    type: UPDATE_ANNOTATION,
    annotation
  };
};
