import React from 'react';
import SongsIndexItem from './songs_index_item';
import shuffle from 'shuffle-array';
import { Link } from 'react-router';

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
    const songCollection = this.songCollection();
    const featuredSongs = songCollection[0].map((song, id) => {
      return (
        <div key={id}>
          <SongsIndexItem key={id} song={song}/>
          <section className="featured-desc"><div className="featured-title">{song.title}</div> by <div className="featured-artist">{song.artist}</div> is one of America's biggest songs right now! Learn the lyrics and show off to the squad.</section>
        </div>
      );
    });
    const otherSongs = songCollection[1].map((song, id) => {
      return <SongsIndexItem key={id} song={song}/>;
    });

    const wideSong = songCollection[1].slice(0, 1).map((song) => {
      return (
        <SongsIndexItem applyClass="wide-song" key={song.id} song={song}/>
      );
    });

    const mediumSong = songCollection[1].slice(1, 5).map((song) => {
      return (
        <SongsIndexItem applyClass="medium-song" key={song.id} song={song}/>
      );
    });

    const smallSong = songCollection[1].slice(5, songCollection[1].length).map((song) => {
      return (
        <SongsIndexItem applyClass="small-song" key={song.id} song={song}/>
      );
    });

      return(
        <div className="song-index group">

          <section className="featured-songs left-column">
            <ul>
              <h1>Featured Songs</h1>
              {featuredSongs}
            </ul>
          </section>

          <div className="add-song-link-container">
            <Link className="add-song-link" to="/songs/new">ADD NEW SONG</Link>
          </div>
          
          <section className=" right-column">
            <ul className="other-songs group">
              <section className="about-container group">
                <p className="about-info">
                  <a href="https://www.youtube.com/watch?v=hD9jw2J5Sbg" target="_blank">
                    <img className="dab" src={window.dabEmoji}></img>
                  </a>
                  Dab genius is a web application that allows its users to annotate their favorite songs.
                  All you have to do is sign up to get started; to annotate, just highlight over the desired lyrics.
                  Not sure what a dab is? Click him to find out!
                </p>
              </section>
              <h3 className="fire">What's hot?</h3>
              {wideSong}
              {mediumSong}
              {smallSong}
            </ul>

          </section>
        </div>
    );
  }
}
