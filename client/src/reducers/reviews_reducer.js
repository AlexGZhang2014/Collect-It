export default function reviewsReducer(state = {
  loading: false,
  adding: false,
  deleting: false,
  updating: false,
  reviews: []
}, action) {
  switch (action.type) {
    case 'LOADING_REVIEWS':
      return { ...state, loading: true }

    case 'FETCH_REVIEWS':
      return { ...state, loading: false, reviews: action.payload }

    case 'ADDING_REVIEW':
      return { ...state, adding: true }

    case 'ADDED_REVIEW':
      const review = { id: action.id, title: action.title, content: action.content, author: action.author, rating: action.rating, collection: action.collection };

      return {
        ...state,
        adding: false,
        reviews: [...state.reviews, review]
      }

    case 'DELETING_REVIEW':
      return { ...state, deleting: true }

    case 'DELETED_REVIEW':
      return {
        ...state,
        deleting: false,
        reviews: state.reviews.filter(review => review.id !== action.id)
      }

    case 'UPDATING_REVIEW':
      return { ...state, updating: true }

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
        updating: false,
        reviews: state.reviews.map(review => {
          if (review.id !== action.id) {
            return review;
          }
          return editedReview;
        })
      };

      return newState;

    default:
      return state;
  }
}
