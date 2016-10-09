import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SongsMiddleware from './songs_middleware';
import AnnotationMiddleware from './annotation_middleware';
import createLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongsMiddleware,
  AnnotationMiddleware,
  createLogger()
);

export default RootMiddleware;
