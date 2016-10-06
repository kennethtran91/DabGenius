import React from 'react';
import SongsIndexItem from './songs_index_item';

export default class SongsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllSongs();
  }

  render() {
    debugger
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
