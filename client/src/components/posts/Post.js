import React, { Component } from 'react'
import CommentsContainer from '../../containers/CommentsContainer'
import Moment from 'react-moment'
import 'moment-timezone'
import EditPostForm from './EditPostForm'

class Post extends Component {
  state = {
    editPostStatus: false
  }

  editPost = () => {
    this.setState({
      editPostStatus: true
    })
  }

  render() {
    const post = this.props.post

    if (this.state.editPostStatus) {
      return (
        <EditPostForm post={post} updatePost={this.props.updatePost}/>
      );
    } else {
      return (
        <div className="post">
          <h2>{post.title}</h2>
          <h4>Written by: {post.author} (<Moment date={post.created_at} fromNow />)</h4>
          <p>{post.content}</p>
          <button onClick={() => this.editPost(post.id)}>Edit this post</button>
          <button onClick={() => this.props.deletePost(post.id)}>Delete this post</button>
          <CommentsContainer post={post}/>
        </div>
      );
    }
  }
}

export default Post
