import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  render() {
    const comments = this.props.comments.map(comment => comment.post && this.props.post && comment.post.id === this.props.post.id ? <Comment key={comment.id} comment={comment} deleteComment={this.props.deleteComment} /> : null)

    return (
      <div className="comments">{ comments }</div>
    )
  }
}

export default Comments
