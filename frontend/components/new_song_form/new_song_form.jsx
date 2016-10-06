import React from 'react';

class NewSongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {artist: "", title: "", lyrics: "", imageFile: null, imageUrl: null};
  }

  render () {
    return (
      <section className="new-song-form-container">
        <form className="new-song-form">
          <h2 className="new-song-header">Create a new song!</h2>
          <h3>Primary info</h3>
          <hr/>
          <label className="new-song-form-label">BY
            <br/>
            <input className="new-song-form-input"
                    placeholder="Artist name"></input>
          </label>
            <br/>
          <label className="new-song-form-label">TITLE
            <br/>
            <input className="new-song-form-input"
                    placeholder="Title"></input>
          </label>
            <br/>
          <label> LYRICS
            <br/>
            <textarea className="new-song-form-input"
                      placeholder="Lyrics..."></textarea>
          </label>
            <br/>

          <label> Upload an image for the song:
          </label>
          <br/>
          <input type="submit"/>
        </form>
      </section>
    );
  }
}

export default NewSongForm;
