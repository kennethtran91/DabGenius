import React from 'react';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneSong();
  }

  render() {
    return (
      <section className="song-detail-container">
        <div className="song-banner">

        </div>
      </section>
    );
  }
}

export default SongDetail;
