import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  // console.log(comments);

  /* map through the comments prop and render a Comment for every piece of data */
  return (
    <div>
      {comments.map(x => {
        return <Comment comment={x} key={x.id} />
      })}
    </div>
  );
};

export default Comments;
