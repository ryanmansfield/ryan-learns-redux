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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submiting form')
    const { postId } = props.params;
    const author = e.target.children[0].value;
    const comment = e.target.children[1].value;
    props.addComment(postId, author, comment);

  }

  return (
    <div className="comment">
      {props.postComments.map((post, i) => (
        renderComment(post, i)
      ))}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="author" />
        <input type="text" placeholder="comment" />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Comments;
