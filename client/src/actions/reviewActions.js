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
        rating: state.rating,
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
        rating: reviewJSON.rating,
        collection: reviewJSON.collection
      }));
  }
}

export function deleteReview(id) {
  return dispatch => {
    dispatch({ type: 'DELETING_REVIEW' });
    if (window.confirm("Are you sure?")) {
      fetch('/api/v1/reviews/' + id, { method: 'DELETE' })
        .then(response => dispatch({
          type: 'DELETED_REVIEW',
          id: id
        }))
    }
  }
}

export function updateReview(state) {
  return dispatch => {
    dispatch({ type: 'UPDATING_REVIEW'});

    const editedReviewData = {
      review: {
        id: state.id,
        title: state.title,
        content: state.content,
        author: state.author,
        rating: state.rating,
        collection_id: state.collection.id
      }
    }

    fetch('/api/v1/reviews/' + state.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedReviewData)
    })
      .then(response => response.json())
      .then(reviewJSON => dispatch({
        type: 'UPDATED_REVIEW',
        id: reviewJSON.id,
        title: reviewJSON.title,
        content: reviewJSON.content,
        author: reviewJSON.author,
        rating: reviewJSON.rating,
        collection: reviewJSON.collection
      }));
  }
}
