import React, { Component } from 'react'

class Posts extends Component {
  render() {
    const posts = this.props.posts.map(post => {
      return (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <h4>Written by: {post.author}</h4>
          <p>{post.content}</p>
        </div>
      )
    })

    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default Posts
