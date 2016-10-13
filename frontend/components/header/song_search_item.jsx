import React from 'react';
import { withRouter } from 'react-router';

const handleClick = (router, url) => (
  () => router.push(url)
);

const SongSearchItem = ({ song, router }) => (
  <li className="search-result" key={song.id}
    onClick={handleClick(router, `/songs/${song.id}`)}>{song.title} by {song.artist}</li>
);

export default withRouter(SongSearchItem);
