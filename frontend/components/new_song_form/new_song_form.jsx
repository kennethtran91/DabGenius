import React from 'react';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';

class NewSongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {artist: "", title: "", lyrics: "",
      imageFile: null, imageUrl: null};
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.returnToHome = this.returnToHome.bind(this);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  returnToHome() {
    this.props.router.push("/");
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  componentDidMount() {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.artistInput).focus(), 0);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("song[artist]", this.state.artist);
    formData.append("song[title]", this.state.title);
    formData.append("song[lyrics]", this.state.lyrics);
    if (this.state.imageFile) {
      formData.append("song[image]", this.state.imageFile);
    }
    this.props.createSong(formData, this.returnToHome);
  }

  render () {

    let errors = null;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((error, i) => {
        return <li key={`error-${i}`}>{error}</li>;
      });
    }

    return (
      <section className="new-song-form-container">
        <form onSubmit={this.handleSubmit} className="new-song-form">
          <h2 className="new-song-header">Create a new song!</h2>
          <h3>Primary info (image optional but recommended)</h3>
          <hr/>
          <ul className="song-form-error">
            {errors}
          </ul>
          <label className="new-song-form-label">BY
            <br/>
            <input onChange={this.update("artist")}
                    ref="artistInput"
                    className="new-song-form-input"
                    placeholder="Artist name"></input>
          </label>
            <br/>
          <label className="new-song-form-label">TITLE
            <br/>
            <input onChange={this.update("title")}
                    className="new-song-form-input"
                    placeholder="Title"></input>
          </label>
            <br/>
          <label> LYRICS
            <br/>
            <textarea onChange={this.update("lyrics")}
                      className="new-song-form-input"
                      placeholder="Lyrics..."></textarea>
          </label>
            <br/>

          <label> Upload an image for the song:
            <input type="file" onChange={this.updateFile}/>
          </label>
          <img className="uploaded-image" src={this.state.imageUrl}/>
          <br/>
          <input type="submit"/>
        </form>
      </section>
    );
  }
}

export default withRouter(NewSongForm);
