import React from 'react';

class CommentForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showStatus: "", body: ""};
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    const comment = {body: this.state.body, annotation_id: this.props.annotationId};
    this.props.createComment(comment);
  }

  render() {
    return (
      <div className="comment-form">
        <textarea className="comment-textarea"
          placeholder="Comment on this annotation!"
          onChange={this.updateBody}/>
        <button className="comment-submit"
          onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default CommentForm;
