import React from 'react';

class Annotation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showAnnotationForm: false, body: "",
    showAnnotationPost: false};
    this.openForm = this.openForm.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  openForm(e) {
    e.preventDefault();
    this.props.hide();
    this.setState({showAnnotationForm: true});
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({showAnnotationForm: false, showAnnotationPost: false});
  }

  handleSave(e) {
    e.preventDefault();
    const annotation = {song_id: this.props.song.id, body: this.state.body,
    start_index: this.props.startIndex, end_index: this.props.endIndex};
    this.props.createAnnotation(annotation);
    this.setState({showAnnotationPost: true, showAnnotationForm: false});
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  render() {

    const annotationButton = () => {
      if (this.props.show) {
        return (
          <button onClick={this.openForm}
            className="annotation-button">Enlighten us</button>
        );
      } else {
        return <div></div>;
      }
    };

    const annotationForm = () => {
      if (this.state.showAnnotationForm) {
        return (
          <div className="annotation-form group">
            <textarea className="annotation-textarea"
              placeholder="Woo"
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

    const annotationList = () => this.props.song.annotations.map((annotation, id) => {
      return (
        <li key={id} className="annotation-post">
          <h2>{annotation.author} wrote: </h2>
          <p className="annotation-body">
            {annotation.body}
          </p>
        </li>
      );
    });

    const annotationPost = () => {
      if (this.state.showAnnotationPost) {
        return (
          <ul>
            {annotationList()}
          </ul>
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
