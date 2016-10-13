import React from 'react';
import TimeAgo from 'react-timeago';

const Comment = ({ comment }) => (
  <div className={`comment-item`}>
    <h4 className="comment-author">{comment.author} wrote: </h4>
    <p className="comment-body">{comment.body}</p>
    <TimeAgo className="timeago" date={comment.created_at}/>
  </div>
)

export default Comment;
