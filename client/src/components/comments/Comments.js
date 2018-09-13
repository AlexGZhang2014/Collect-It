import React, { Component } from 'react'
import Comment from './Comment'
import EditCommentForm from './EditCommentForm'

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        {this.props.comments.map(comment => {
          if (comment.post && this.props.post && comment.post.id === this.props.post.id) {
            if (this.props.editCommentId === comment.id) {
              return (
                <EditCommentForm
                  comment={comment}
                  post={this.props.post}
                  key={comment.id}
                  updateComment={this.props.updateComment}
                  toggleEditOff={this.props.toggleEditOff}
                  />
              );
            } else {
              return (
                <Comment
                  key={comment.id}
                  comment={comment}
                  deleteComment={this.props.deleteComment}
                  toggleEditOn={this.props.toggleEditOn}
                  />
              );
            }
          }
        return null;})
        }
      </div>
    )
  }
}

export default Comments
