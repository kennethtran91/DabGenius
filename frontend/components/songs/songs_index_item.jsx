import React from 'react';
import { withRouter } from 'react-router';

const handleClick = (router, url) => (
  () => router.push(url)
);

const SongsIndexItem = ({ song, router }) => (
  <li
    className="song-index-item"
    onClick={handleClick(router, `/api/songs/${song.id}`)}>
      <span>{song.title}</span>
      <img src={song.image_url} alt={song.title}/>
  </li>
)

export default withRouter(SongsIndexItem);
