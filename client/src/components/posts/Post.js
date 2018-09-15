import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'
import Moment from 'react-moment'
import 'moment-timezone'
import AddCommentForm from '../comments/AddCommentForm'
import Button from '@material-ui/core/Button'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCommentStatus: false
    }
  }

  toggleAddComment = () => {
    this.setState({
      addCommentStatus: !this.state.addCommentStatus
    })
  }

  render() {
    const post = this.props.post

    const buttonOrForm = () => !this.state.addCommentStatus ? <Button variant="contained" color="primary" onClick={this.toggleAddComment}>Add a comment</Button> : <AddCommentForm post={post} toggleAddComment={this.toggleAddComment} addComment={this.props.addComment}/>

    return (
      <div className="post">
        <h2 className="post-title">{post.title}</h2>
        <h4>Written by: {post.author} (<Moment date={post.created_at} fromNow />)</h4>
        <p className="post-content">{post.content}</p>
        <h6>Last updated: <Moment date={post.updated_at} fromNow /></h6>
        <Button variant="contained" color="primary" onClick={() => this.props.toggleEditOn(post.id)}>Edit this post</Button>
        <Button variant="contained" color="secondary" onClick={() => this.props.deletePost(post.id)}>Delete this post</Button>
        {buttonOrForm()}
        <CommentsContainer post={post}/>
      </div>
    );
  }
}

export default Post
