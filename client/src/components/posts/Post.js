import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'

class Post extends Component {
  render() {
    const post = this.props.post

    return (
      <div className="post">
        <h2>{post.title}</h2>
        <h4>Written by: {post.author}</h4>
        <p>{post.content}</p>
        <CommentsContainer post={post}/>
      </div>
    )
  }
}

export default Post
