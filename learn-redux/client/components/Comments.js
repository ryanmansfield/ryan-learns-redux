import React from 'react';

const Comments = (props) => {
  const renderComment = (comment, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }
  return (
    <div className="comment">
      {props.postComments.map((post, i) => (
        renderComment(post, i)
      ))}
      <form ref="commentForm" className="comment-form">
        <input type="text" ref="author" placeholder="author" />
        <input type="text" ref="comment" placeholder="comment" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Comments;
