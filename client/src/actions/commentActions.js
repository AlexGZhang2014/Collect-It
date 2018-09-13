export function fetchComments() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS' });
    return fetch('/api/v1/comments.json')
      .then(response => response.json())
      .then(commentData => dispatch({
        type: 'FETCH_COMMENTS',
        payload: commentData
      }));
  }
}

export function addComment(state) {
  return dispatch => {
    dispatch({ type: 'ADDING_COMMENT' });

    const commentData = {
      comment: {
        content: state.content,
        author: state.author,
        post_id: state.postId
      }
    }

    fetch('/api/v1/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentData)
    })
      .then(response => response.json())
      .then(commentJSON => dispatch({
        type: "ADDED_COMMENT",
        id: commentJSON.id,
        content: commentJSON.content,
        author: commentJSON.author,
        post: commentJSON.post
      }));
  }
}
