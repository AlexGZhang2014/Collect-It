export function fetchLikes() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_LIKES' });
    return fetch('/api/v1/likes.json')
      .then(response => response.json())
      .then(likeData => dispatch({
        type: 'FETCH_LIKES',
        payload: likeData
      }));
  }
}

export function addLike(postId) {
  return dispatch => {
    dispatch({ type: 'ADDING_LIKE' });

    const likeData = {
      like: {
        post_id: postId
      }
    }

    fetch('/api/v1/likes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(likeData)
    })
      .then(response => response.json())
      .then(likeJSON => dispatch({
        type: "ADDED_LIKE",
        id: likeJSON.id,
        post: likeJSON.post
      }));
  }
}
