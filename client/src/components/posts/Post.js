import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'
import Moment from 'react-moment'
import 'moment-timezone'
import AddCommentForm from '../comments/AddCommentForm'

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

    const buttonOrForm = () => !this.state.addCommentStatus ? <button onClick={this.toggleAddComment}>Add a comment</button> : <AddCommentForm post={post} toggleAddComment={this.toggleAddComment} addComment={this.props.addComment}/>

    return (
      <div className="post">
        <h2 className="post-title">{post.title}</h2>
        <h4>Written by: {post.author} (<Moment date={post.created_at} fromNow />)</h4>
        <p className="post-content">{post.content}</p>
        <h6>Last updated: <Moment date={post.updated_at} fromNow /></h6>
        <button onClick={() => this.props.toggleEditOn(post.id)}>Edit this post</button>
        <button onClick={() => this.props.deletePost(post.id)}>Delete this post</button>
        {buttonOrForm()}
        <CommentsContainer post={post}/>
      </div>
    );
  }
}

export default Post
