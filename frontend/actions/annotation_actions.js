export const CREATE_ANNOTATION = "CREATE_ANNOTATION";
export const DELETE_ANNOTATION = "DELETE_ANNOTATION";
export const REQUEST_ONE_ANNOTATION = "REQUEST_ONE_ANNOTATION";
export const RECEIVE_ONE_ANNOTATION = "RECEIVE_ONE_ANNOTATION";


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

export const requestOneAnnotation = (id) => {
  return {
    type: REQUEST_ONE_ANNOTATION,
    id
  };
};

export const receiveOneAnnotation = (annotation) => {
  return {
    type: RECEIVE_ONE_ANNOTATION,
    annotation
  };
};
