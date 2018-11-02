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
      .then(postJSON => {

        dispatch({
        type: "ADDED_POST",
        id: postJSON.id,
        title: postJSON.title,
        content: postJSON.content,
        author: postJSON.author
      })
    });
  }
}

export function deletePost(id) {
  return dispatch => {
    dispatch({ type: 'DELETING_POST' });
    if (window.confirm("Are you sure?")) {
      fetch('/api/v1/posts/' + id, { method: 'DELETE' })
        .then(response => dispatch({
          type: 'DELETED_POST',
          id: id
        }))
    }
  }
}

export function updatePost(state) {
  return dispatch => {
    dispatch({ type: 'UPDATING_POST'});

    const editedPostData = {
      post: {
        id: state.id,
        title: state.title,
        content: state.content,
        author: state.author,
        comments: state.comments
      }
    }

    fetch('/api/v1/posts/' + state.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedPostData)
    })
      .then(response => response.json())
      .then(postJSON => dispatch({
        type: 'UPDATED_POST',
        id: postJSON.id,
        title: postJSON.title,
        content: postJSON.content,
        author: postJSON.author,
        comments: postJSON.comments
      }));
  }
}

export function sortByLikes() {
  return dispatch => {
    dispatch({ type: "SORT_POSTS" });
  }
}
