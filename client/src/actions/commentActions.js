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

export function deleteComment(id) {
  return dispatch => {
    dispatch({ type: 'DELETING_COMMENT' });
    if (window.confirm("Are you sure?")) {
      fetch('/api/v1/comments/' + id, { method: 'DELETE' })
        .then(response => dispatch({
          type: 'DELETED_COMMENT',
          id: id
        }))
    }
  }
}

export function updateComment(state) {
  return dispatch => {
    dispatch({ type: 'UPDATING_COMMENT'});

    const editedCommentData = {
      comment: {
        id: state.id,
        content: state.content,
        author: state.author
      }
    }

    fetch('/api/v1/comments/' + state.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedCommentData)
    })
      .then(response => response.json())
      .then(commentJSON => dispatch({
        type: 'UPDATED_POST',
        id: commentJSON.id,
        content: commentJSON.content,
        author: commentJSON.author
      }));
  }
}
