export default function reviewsReducer(state = {
  loading: false,
  reviews: []
}, action) {
  switch (action.type) {
    case 'LOADING_REVIEWS':
      return { ...state, loading: true }

    case 'FETCH_REVIEWS':
      return { loading: false, reviews: action.payload }

    case 'ADDED_REVIEW':
      const review = { id: action.id, title: action.title, content: action.content, author: action.author, rating: action.rating, collection: action.collection };

      return {
        ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETED_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      }

    case 'UPDATED_REVIEW':
      const editedReview = {
        id: action.id,
        title: action.title,
        content: action.content,
        author: action.author,
        rating: action.rating,
        collection: action.collection
      };

      let newState = {
        ...state,
        reviews: state.reviews.map(review => {
          if (review.id !== action.id) {
            return review;
          }
          return editedReview;
        })
      };

    default:
      return state;
  }
}
