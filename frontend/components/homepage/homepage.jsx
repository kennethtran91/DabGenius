import React from 'react';
import SongsIndexContainer from '../songs/songs_index_container';

class Homepage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-container group">
        <section className="about-container">
          <p className="about-info">
            Dab genius is a web application that allows its users to annotate their favorite songs.
          </p>
        </section>
          <ul className="songs-list">
            <SongsIndexContainer/>
          </ul>
        <section>

        </section>
      </div>
    );
  }
}

export default Homepage;
