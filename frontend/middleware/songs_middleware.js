import { REQUEST_ALL_SONGS, REQUEST_ONE_SONG, CREATE_SONG,
receiveAllSongs, receiveOneSong } from '../actions/song_actions';
import { receiveErrors } from '../actions/session_actions';
import * as API from '../util/song_api_util';

const SongsMiddleware = ({ getState, dispatch }) => next => action => {
  let successCallback;
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case REQUEST_ALL_SONGS:
      successCallback = (songs) => dispatch(receiveAllSongs(songs));
      API.fetchAllSongs(successCallback, errorCallback);
      return next(action);

    case REQUEST_ONE_SONG:
      successCallback = (song) => dispatch(receiveOneSong(song));
      API.fetchSong(action.track.id, successCallback, errorCallback);
      return next(action);

    case CREATE_SONG:
      successCallback = (song) => dispatch(receiveOneSong(song));
      API.createSong(action.song, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default SongsMiddleware;
