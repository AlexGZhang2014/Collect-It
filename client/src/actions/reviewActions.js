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

export function addReview(state) {
  return dispatch => {
    dispatch({ type: 'ADDING_REVIEW' });

    const reviewData = {
      review: {
        title: state.title,
        content: state.content,
        author: state.author,
        collection_id: state.collectionId
      }
    }

    fetch('/api/v1/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData)
    })
      .then(response => response.json())
      .then(reviewJSON => dispatch({
        type: "ADDED_REVIEW",
        id: reviewJSON.id,
        title: reviewJSON.title,
        content: reviewJSON.content,
        author: reviewJSON.author,
        collection: reviewJSON.collection
      }));
  }
}
