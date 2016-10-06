export const fetchAllSongs = (success, error) => {
  $.ajax({
    url: '/api/songs',
    method: 'GET',
    success,
    error
  });
};

export const fetchSong = (id, success, error) => {
  $.ajax({
    url: `/api/songs/${id}`,
    method: 'GET',
    success,
    error
  });
};

export const createSong = (song, success, error) => {
  $.ajax({
    url: '/api/songs',
    method: 'POST',
    data: {song: song},
    success,
    error
  });
};

// export const editSong = (song, success, error) => {
//   $.ajax({
//     url: `/api/songs/${song.id}`,
//     method: 'POST',
//     data: {song: song},
//     success,
//     error
//   });
// };


// export const deleteSong = (id, success, error) => {
//   $.ajax({
//     url: `/api/songs/${id}`,
//     method: 'DELETE',
//     success,
//     error
//   });
// };
