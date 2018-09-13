import React, { Component } from 'react'
import Post from './Post'
import EditPostForm from './EditPostForm'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPostId: null
    }
  }

  toggleEditOn = id => {
    this.setState({
      editPostId: id
    })
  }

  toggleEditOff = () => {
    this.setState({
      editPostId: null
    })
  }

  render() {
    return (
      <div className="posts">
        {this.props.posts.map(post => {
          if (this.state.editPostId === post.id) {
            return (
              <EditPostForm
                post={post}
                key={post.id}
                updatePost={this.props.updatePost}
                toggleEditOff={this.toggleEditOff}
                />
            )
          } else {
            return (
              <Post
                key={post.id}
                post={post}
                deletePost={this.props.deletePost}
                toggleEditOn={this.toggleEditOn}
                addComment={this.props.addComment}
                />
            )
          }
        })}
      </div>
    )
  }
}

export default Posts
