import React from 'react';
import './Comment.css';

export const Comment = (props) => {
  const { text, author } = props.comment;
  return (
    <div>
      <div className="Comment">{text}</div>
      <div className="Author">{author.username}</div>
    </div>
  )
};