import React from 'react';
import { withRouter } from 'react-router';

const handleClick = (router, url) => (
  () => router.push(url)
);

// onClick={handleClick(router, `/api/songs/${song.id}`)

const SongsIndexItem = ({ song, router }) => (
  <li
    className="song-index-item group">
      <h3 className="song-index-item-caption">{song.title} by {song.artist}</h3>
      <img className="song-index-item-img" src={song.image_url} alt={song.title}/>
  </li>
)

export default withRouter(SongsIndexItem);
