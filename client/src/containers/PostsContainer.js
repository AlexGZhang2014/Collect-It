import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import fetchPosts from '../actions/postActions'
import PostInput from '../components/posts/PostInput'

class PostsContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div className="posts-container">
        <h1>Your Posts Feed!</h1>
        <PostInput addPost={this.props.addPost}/>
        <Posts posts={this.props.posts} deletePost={this.props.deletePost}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  addPost: state => dispatch({ type: 'ADD_POST', title: state.title, content: state.content, author: state.author }),
  deletePost: id => dispatch({ type: 'DELETE_POST', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
