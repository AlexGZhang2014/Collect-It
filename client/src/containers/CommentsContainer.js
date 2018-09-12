import React, { Component } from 'react'
import Comments from '../components/comments/Comments'

class CommentsContainer extends Component {
  render() {
    return (
      <div>
        <Comments comments={this.props.post.comments}/>
      </div>
    )
  }
}

export default CommentsContainer
