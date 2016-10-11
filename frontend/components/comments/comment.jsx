import React from 'react';

const Comment = ({ comment }) => (
  <div className={`comment-item`}>
    <h3 className="comment-header">{comment.author} wrote: </h3>
    <p className="comment-body">{comment.body}</p>
  </div>
)

export default Comment;
