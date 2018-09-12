import React, { Component } from 'react'
import Posts from '../components/posts/Posts.js'

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/posts.json')
      .then(response => response.json())
      .then(postData => this.setState({
        posts: postData
      }))
  }

  render() {
    return (
      <div className="posts-container">
        <Posts posts={this.state.posts}/>
      </div>
    )
  }
}

export default PostsContainer
