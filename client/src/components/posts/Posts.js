import React, { Component } from 'react'
import Post from './Post'
import EditPostForm from './EditPostForm'

class Posts extends Component {
  render() {
    const posts = this.props.posts.map(post => <Post key={post.id} post={post} deletePost={this.props.deletePost} updatePost={this.props.updatePost} />)

    return (
      <div className="posts">
        {posts}
      </div>
    )
  }
}

export default Posts
