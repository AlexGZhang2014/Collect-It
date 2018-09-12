import React, { Component } from 'react'

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
        {this.state.posts.map(post => {
          return (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <h4>Written by: {post.author}</h4>
              <p>{post.content}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PostsContainer
