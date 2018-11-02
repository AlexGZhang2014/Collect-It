import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import { fetchPosts, addPost, deletePost, updatePost, sortByLikes } from '../actions/postActions'
import { addComment } from '../actions/commentActions'
import AddPostForm from '../components/posts/AddPostForm'
import { fetchLikes, addLike } from '../actions/likeActions'
import Button from '@material-ui/core/Button'

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPostId: null,
      sortDirection: null
    }
  }

  toggleEditOn = id => {
    this.setState({
      editPostId: id
    })
  }

  toggleEditOff = () => {
    this.setState({
      ...this.state,
      editPostId: null
    })
  }

  toggleSort = () => {
    this.setState({
      ...this.state,
      sortDirection: this.state.sortDirection === 1 ? -1 : 1
    })
  }

  getSortedPosts = () => {
    if (!this.state.sortDirection) {
      return this.props.posts;
    }
    let postsCopy = [...this.props.posts];
    postsCopy.sort((a, b) => (b.likes.length - a.likes.length) * this.state.sortDirection);
    return postsCopy;
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchLikes();
  }

  render() {
    return (
      <div className="posts-container">
        <h1>Your Posts Feed!</h1>
        <AddPostForm addPost={this.props.addPost}/>
        <Button variant="contained" color="primary" onClick={this.toggleSort}>Sort by Likes</Button>
        <Posts
          posts={this.getSortedPosts()}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
          addComment={this.props.addComment}
          toggleEditOn={this.toggleEditOn}
          toggleEditOff={this.toggleEditOff}
          editPostId={this.state.editPostId}
          addLike={this.props.addLike}
          likes={this.props.likes}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  likes: state.likes.likes
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  addPost: state => dispatch(addPost(state)),
  deletePost: id => dispatch(deletePost(id)),
  updatePost: state => dispatch(updatePost(state)),
  addComment: state => dispatch(addComment(state)),
  fetchLikes: () => dispatch(fetchLikes()),
  addLike: id => dispatch(addLike(id)),
  sortByLikes: () => dispatch(sortByLikes())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
