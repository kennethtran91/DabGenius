import { CREATE_COMMENT, addNewComment, REQUEST_ALL_COMMENTS, receiveAllComments} from '../actions/comment_actions';
import * as API from '../util/comment_api_util';

const CommentMiddleware = ({ getState, dispatch }) => next => action => {
  let successCallback;
  switch(action.type) {

    case CREATE_COMMENT:
      successCallback = (comment) => {
         dispatch(addNewComment(comment));
      };
      API.createComment(action.comment, successCallback);
      return next(action);

    case REQUEST_ALL_COMMENTS:
      successCallback = (comments) => dispatch(receiveAllComments(comments));
      API.fetchAllComments(action.id, successCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default CommentMiddleware;
