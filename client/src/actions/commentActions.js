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
