export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_ONE_SONG = "RECEIVE_ONE_SONG";
export const REQUEST_ALL_SONGS = "REQUEST_ALL_SONGS";
export const REQUEST_ONE_SONG = "REQUEST_ONE_SONG";
export const CREATE_SONG = "CREATE_SONG";
export const ADD_NEW_SONG = "ADD_NEW_SONG";

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveOneSong = (song) => ({
  type: RECEIVE_ONE_SONG,
  song
});

export const requestAllSongs = () => ({
  type: REQUEST_ALL_SONGS
});

export const requestOneSong = (id) => ({
  type: REQUEST_ONE_SONG,
  id
});

export const createSong = (song, callback) => ({
  type: CREATE_SONG,
  song,
  callback
});

export const addNewSong = (song) => ({
  type: ADD_NEW_SONG,
  song
});
