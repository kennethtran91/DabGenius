export const CREATE_COMMENT = "CREATE_COMMENT";
export const REQUEST_ALL_COMMENTS = "REQUEST_ALL_COMMENTS";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";

export const createComment = (comment, callback) => {
  return {
    type: CREATE_COMMENT,
    comment,
    callback
  };
};

export const requestAllComments = (id) => {
  return {
    type: REQUEST_ALL_COMMENTS,
    id
  };
};

export const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

export const addNewComment = (comment) => {
  return {
    type: ADD_NEW_COMMENT,
    comment
  };
};
