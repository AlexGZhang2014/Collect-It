import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import fetchPosts from '../actions/postActions'

class PostsContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div className="posts-container">
        <h1>Your Posts Feed!</h1>
        <Posts posts={this.props.posts}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
