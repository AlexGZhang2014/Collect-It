export default function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });
    return fetch('/api/v1/posts.json')
      .then(response => response.json())
      .then(postData => dispatch({ type: 'FETCH_POSTS', payload: postData }));
  }
}
