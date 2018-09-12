import React, { Component } from 'react'
import Post from './Post'

class Posts extends Component {
  render() {
    const posts = this.props.posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePost} />)

    return (
      <div className="posts">
        {posts}
      </div>
    )
  }
}

export default Posts
