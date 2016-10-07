import React from 'react';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.showAnnotationButton = this.showAnnotationButton.bind(this);
  }

  componentDidMount() {
    this.props.requestOneSong(this.props.params.songId);
  }

  handleEditButton(e) {
    e.preventDefault();
  }
  // for annotations: window.getSelection().toString()

  // printSelection(e) {
  //   console.log(window.getSelection().toString());
  // } // for testing

  showAnnotationButton() {
    return (
      <button className="annotation-button">LKSDJFLKSDJFKLSDJFJSDFDSJKFLJSDF</button>
    );
  }

  render() {

    if (this.props.song) {
      let edit = null;
      if (this.props.currentUser && this.props.currentUser.id === this.props.song.author_id) {
        edit = <button className="song-edit-button" onClick={this.handleEditButton}>Edit Song</button>;
      }
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
          {edit}
            <h3 className="lyrics-header">
              {this.props.song.title} lyrics
            </h3>
            <p onMouseUp={this.showAnnotationButton} className="lyrics-text">
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
