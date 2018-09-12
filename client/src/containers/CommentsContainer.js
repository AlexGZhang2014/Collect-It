import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentsContainer extends Component {
  render() {
    const comments = this.props.post.comments.map(comment => <p>{comment.content}</p>)
    return (
      <div>
        {comments}
      </div>
    )
  }
}

export default CommentsContainer
