import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';
import Comment from '../comments/comment';

class Annotation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showAnnotationForm: false, body: ""};
    this.openForm = this.openForm.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

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
            <textarea className="annotation-textarea"
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
      const anno = that.props.selectedAnnotation;
      if (this.props.showStatus === "post") {
        let commentsList;
        let commentsHeader;
        if (anno.comments) {
          commentsList = anno.comments.reverse().map((comment, id) => {
            return (
              <Comment comment={comment} key={id}/>
            );
          });
          commentsHeader = <h3 className="comments-header">Comments</h3>;
        }

      const votes = anno.votes.map((vote) => {
        return vote.value;
      });
      const add = (a, b) => { return a + b; };
      const score = votes.reduce(add, 0);
      let scoreShow;
      if (score < 0) {
        scoreShow = <div className="red annotation-score">{score}</div>;
      } else if (score === 0){
        scoreShow = <div className="annotation-score">{score}</div>;
      } else {
        scoreShow = <div className="green annotation-score">{score}</div>;
      }

        return (
          <div style={style} className="annotation-display">
            <h1 className="annotation-author">Annotation by: {anno.author}</h1>
            <br/>
            <p className="annotation-body">{anno.body}</p>
            <br/>
            <div className="annotation-score-container group">

              <button className="annotation-upvote" onClick={() => this.props.upvoteAnnotation(anno.id)}>Dope</button>
              {scoreShow}
              <button className="annotation-downvote" onClick={() => this.props.downvoteAnnotation(anno.id)}>Nope</button>

            </div>
            <hr className="line"/>
            {commentsHeader}
            <CommentFormContainer annotationId={anno.id}/>
            {commentsList}
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
