import React, { Component, Fragment } from 'react'
import Post from './Post'
import EditPostForm from './EditPostForm'
import CommentsContainer from '../../containers/CommentsContainer'

class Posts extends Component {

  render() {
    return (
      <div className="posts">
        {this.props.posts.map(post => {
          if (this.props.editPostId === post.id) {
            return (
              <Fragment>
                <EditPostForm
                  post={post}
                  key={post.id}
                  updatePost={this.props.updatePost}
                  toggleEditOff={this.props.toggleEditOff}
                  />
                <CommentsContainer post={post}/>
              </Fragment>
            )
          } else {
            return (
              <Post
                key={post.id}
                post={post}
                deletePost={this.props.deletePost}
                toggleEditOn={this.props.toggleEditOn}
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
