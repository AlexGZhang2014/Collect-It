export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });
    return fetch('/api/v1/posts.json')
      .then(response => response.json())
      .then(postData => dispatch({ type: 'FETCH_POSTS', payload: postData }));
  }
}

export function addPost(state) {
  return dispatch => {
    dispatch({ type: 'ADDING_POST' });

    const postData = {
      post: {
        title: state.title,
        content: state.content,
        author: state.author
      }
    }

    fetch('/api/v1/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(postJSON => dispatch({
        type: "ADDED_POST",
        id: postJSON.id,
        title: postJSON.title,
        content: postJSON.content,
        author: postJSON.author
      }));
  }
}

export function deletePost(id) {
  return dispatch => {
    dispatch({ type: 'DELETING_POST' });

    fetch('/api/v1/posts/' + id, { method: 'DELETE' })
      .then(response => dispatch({
        type: 'DELETED_POST',
        id: id
      }))
  }
}
