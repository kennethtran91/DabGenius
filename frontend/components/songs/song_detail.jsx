import React from 'react';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneSong(this.props.params.songId);
  }

  render() {

    if (this.props.song) {
      return (
        <section className="song-detail-container">
          <div className="song-banner">
            <img className="zoomed-banner" src={this.props.song.image_url}></img>
          </div>
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default SongDetail;
