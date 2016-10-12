import React from 'react';

const Comment = ({ comment }) => (
  <div className={`comment-item`}>
    <h4 className="comment-author">{comment.author} wrote: </h4>
    <p className="comment-body">{comment.body}</p>
  </div>
)

export default Comment;
