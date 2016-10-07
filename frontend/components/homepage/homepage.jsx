import React from 'react';
import SongsIndexContainer from '../songs/songs_index_container';
import { Link } from 'react-router';

class Homepage extends React.Component{
  constructor(props) {
    super(props);
  }
  //maybe just do features and medium icons (like youtube thumbnails)

  render() {
    return (
      <div className="homepage-container group">
        <div className="add-song-link-container">
          <Link className="add-song-link" to="/api/songs/new">ADD NEW SONG</Link>
        </div>
        <section className="right-column">
          <section className="about-container">
            <p className="about-info">
              <img className="headphones" src="https://assets.genius.com/images/tag-rap.png?1475864522"></img>
              Dab genius is a web application that allows its users to annotate their favorite songs.
            </p>
          </section>
        </section>
        <section className="left-column">
          <ul className="songs-list">
            <SongsIndexContainer/>
          </ul>

        </section>
      </div>
    );
  }
}

export default Homepage;
