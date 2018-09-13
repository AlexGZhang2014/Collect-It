import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import { fetchPosts, addPost, deletePost, updatePost } from '../actions/postActions'
import { addComment } from '../actions/commentActions'
import NewPostForm from '../components/posts/NewPostForm'

class PostsContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div className="posts-container">
        <h1>Your Posts Feed!</h1>
        <NewPostForm addPost={this.props.addPost}/>
        <Posts
          posts={this.props.posts}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
          addComment={this.props.addComment}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  addPost: state => dispatch(addPost(state)),
  deletePost: id => dispatch(deletePost(id)),
  updatePost: state => dispatch(updatePost(state)),
  addComment: state => dispatch(addComment(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
