import React from 'react';
import SongsIndexItem from './songs_index_item';
import shuffle from 'shuffle-array';

export default class SongsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllSongs();
  }

  songCollection() {
    let allSongs = this.props.songs;
    const shuffledSongs = shuffle(allSongs);
    const featuredSongs = shuffledSongs.slice(0,3);
    const otherSongs = shuffledSongs.slice(3);
    return [featuredSongs, otherSongs];
  }

  render() {
    return (
      <section className="song-index">
        <ul>
          {this.props.songs.map(song => (
            <SongsIndexItem key={song.id} song={song} />
          ))}
        </ul>

      </section>
    );
  }
}
