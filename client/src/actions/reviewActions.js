export function fetchReviews() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_REVIEWS' });
    return fetch('/api/v1/reviews.json')
      .then(response => response.json())
      .then(reviewData => dispatch({
        type: 'FETCH_REVIEWS',
        payload: reviewData
      }));
  }
}
