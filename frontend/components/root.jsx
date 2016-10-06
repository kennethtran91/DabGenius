import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import NewSongForm from './new_song_form/new_song_form';
import Homepage from './homepage/homepage';


const Root = ({ store }) => {

  const _redirectUnlessLoggedIn = (newState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/");
    }
  }
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Homepage} />
          <Route path="api/songs/new" component={NewSongForm} onEnter={_redirectUnlessLoggedIn}></Route>
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
