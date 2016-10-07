import React from 'react';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneSong(this.props.params.songId);
  }

  processLyrics() {

  }

  render() {

    if (this.props.song) {
      return (
        <section className="song-detail-container">
          <div className="song-banner">
            <img className="zoomed-banner" src={this.props.song.image_url}></img>
            <div className="banner-info">
              <h2 className="song-title">
                {this.props.song.title}</h2>
              <br/>
              <h2 className="song-artist">
                {this.props.song.artist}</h2>
            </div>
            <img className="pro-pic"
              src={this.props.song.image_url}></img>
          </div>

          <section className="lyrics-container">
            <h3 className="lyrics-header">
              {this.props.song.title} lyrics
            </h3>
            <p className="lyrics-text">
              {this.props.song.lyrics}</p>
          </section>
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
