import React, { Component } from 'react'
import Comments from '../components/comments/Comments'
import { fetchComments, deleteComment, updateComment } from '../actions/commentActions'
import { connect } from 'react-redux'

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editCommentId: null
    }
  }

  toggleEditOn = id => {
    this.setState({
      editCommentId: id
    })
  }

  toggleEditOff = () => {
    this.setState({
      editCommentId: null
    })
  }

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
          updateComment={this.props.updateComment}
          toggleEditOn={this.toggleEditOn}
          toggleEditOff={this.toggleEditOff}
          editCommentId={this.state.editCommentId}
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
  deleteComment: id => dispatch(deleteComment(id)),
  updateComment: state => dispatch(updateComment(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
