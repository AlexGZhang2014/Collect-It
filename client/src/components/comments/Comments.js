import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  render() {
    const comments = this.props.comments.map(comment => <Comment key={comment.id} comment={comment} />)

    return (
      <div className="comments">{ comments }</div>
    )
  }
}

export default Comments
