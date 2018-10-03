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
                addLike={this.props.addLike}
                likes={this.props.likes}
                />
            )
          }
        })}
      </div>
    )
  }
}

Posts.defaultProps = {
  posts: [
    {
      id: 0,
      title: "Example Post",
      author: "Example Author",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
}


export default Posts
