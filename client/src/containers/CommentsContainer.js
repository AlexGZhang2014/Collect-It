import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import { fetchComments, deleteComment } from '../actions/commentActions'
import { connect } from 'react-redux'

class CommentsContainer extends Component {

  componentDidMount() {
    this.props.fetchComments()
  }

  render() {
    return (
      <div>
        <h3>Comments:</h3>
        <Comments
          comments={this.props.comments}
          post={this.props.post}
          deleteComment={this.props.deleteComment}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments
})

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments()),
  deleteComment: id => dispatch(deleteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
