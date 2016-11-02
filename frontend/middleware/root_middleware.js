import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SongsMiddleware from './songs_middleware';
import AnnotationMiddleware from './annotation_middleware';
import CommentMiddleware from './comment_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongsMiddleware,
  AnnotationMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
