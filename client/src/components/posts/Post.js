import React, { Component } from 'react'

class Post extends Component {
  render() {
    const post = this.props.post

    return (
      <div className="post">
        <h2>{post.title}</h2>
        <h4>Written by: {post.author}</h4>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default Post
