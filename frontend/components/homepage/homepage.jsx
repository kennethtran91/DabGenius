import React from 'react';
import SongsIndexContainer from '../songs/songs_index_container';
import { Link } from 'react-router';

class Homepage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-container group">
        <div className="add-song-link-container">
          <Link className="add-song-link" to="/api/songs/new">ADD NEW SONG</Link>
        </div>
        <section>
          <section className="songs-list">
            <SongsIndexContainer/>
          </section>

        </section>
      </div>
    );
  }
}

export default Homepage;
