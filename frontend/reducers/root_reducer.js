import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongsReducer from './songs_reducer';
import AnnotationsReducer from './annotations_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  annotations: AnnotationsReducer
});

export default RootReducer;
