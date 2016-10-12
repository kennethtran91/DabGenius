import React from 'react';

class CommentForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {showStatus: "", body: ""};
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  clearForm() {
    this.setState({body: ""});
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {body: this.state.body, annotation_id: this.props.annotationId};
    this.props.createComment(comment, this.clearForm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <textarea className="comment-textarea"
          placeholder="Comment on this annotation!"
          onChange={this.updateBody}/>
        <br/>
        <button className="comment-submit">Submit</button>
      </form>
    );
  }
}

export default CommentForm;
