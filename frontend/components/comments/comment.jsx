import React from 'react';

class Comment extends React.Component{
  constructor(props) {
    super(props);

    this.state = {showStatus: ""};
  }

  render() {
    const commentForm = () => {
      if (this.state.showStatus === "form") {
        return (
          <div className="comment-form">
            
          </div>
        );
      }
    };

  }

}

export default Comment;
