import React from 'react';
import SongsIndexContainer from '../songs/songs_index_container';

class Homepage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage-container group">
        <section className="songs-list">
          <SongsIndexContainer/>
        </section>
      </div>
    );
  }
}

export default Homepage;
