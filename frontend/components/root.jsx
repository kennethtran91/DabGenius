import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import NewSongFormContainer from './new_song_form/new_song_form_container';
import Homepage from './homepage/homepage';
import SongDetailContainer from './songs/song_detail_container';
import * as SongActions from '../actions/song_actions';


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
          <Route path="api/songs/new"
            component={NewSongFormContainer}
            onEnter={_redirectUnlessLoggedIn}></Route>

          <Route path="api/songs/:songId"
            component={SongDetailContainer}></Route>
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
