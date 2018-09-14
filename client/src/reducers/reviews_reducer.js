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

    default:
      return state;
  }
}
