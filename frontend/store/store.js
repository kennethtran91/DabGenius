import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middleware/root_middleware';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const configureStore = (preloadedState = {}) => (

  createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(RootMiddleware)
  )
);

export default configureStore;
