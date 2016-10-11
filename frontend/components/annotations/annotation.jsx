import React from 'react';
import ReactDOM from 'react-dom';

class Annotation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showAnnotationForm: false, body: ""};
    this.openForm = this.openForm.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  // componentDidMount() {
  //   this.props.requestAllComments(this.props.params.annotationId);
  // }

  openForm(e) {
    e.preventDefault();
    this.props.setAnnotationStatus("form");
  }



  handleCancel(e) {
    e.preventDefault();
    this.props.setAnnotationStatus("");
  }

  handleSave(e) {
    e.preventDefault();
    const annotation = {song_id: this.props.song.id, body: this.state.body,
    start_index: this.props.startIndex, end_index: this.props.endIndex};
    this.props.createAnnotation(annotation);
    this.props.setAnnotationStatus("");
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  render() {
    const style = {
      position: "absolute",
      top: this.props.annotationButtonPosition
    };

    const annotationButton = () => {
      if (this.props.showStatus === "button") {

        return (
          <button style={style}
            onClick={this.openForm}
            className="annotation-button">Enlighten us</button>
        );
      } else {
        return <div></div>;
      }
    };

    const annotationForm = () => {
      if (this.props.showStatus === "form") {
        return (
          <div style={style} className="annotation-form group">
            <textarea ref="annotationTextarea" className="annotation-textarea"
              placeholder="Annotation away!"
              onChange={this.updateBody}/>
            <br/>
            <div className="form-buttons">
                <button className="save-button"
                        onClick={this.handleSave}>
                        Save
                </button>
                <button className="cancel-button"
                        onClick={this.handleCancel}>
                        Cancel
                </button>
              </div>
          </div>
        );
      }
    };


    let that = this;
    const annotationPost = () => {
      const anno = that.props.selectedElement;
      if (this.props.showStatus === "post") {
        return (
          <div style={style} className="annotation-display">
            <h1 className="annotation-author">Annotation by: {anno.author}</h1>
            <br/>
            <p className="annotation-body">{anno.body}</p>
          </div>
        );
      }
    };

    return (
      <div>
        {annotationButton()}
        {annotationForm()}
        {annotationPost()}
      </div>
    );
  }

}

export default Annotation;
