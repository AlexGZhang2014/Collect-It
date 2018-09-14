export default function reviewsReducer(state = {
  loading: false,
  reviews: []
}, action) {
  switch (action.type) {
    case 'LOADING_REVIEWS':
      return { ...state, loading: true }

    case 'FETCH_REVIEWS':
      return { loading: false, reviews: action.payload }

    default:
      return state;
  }
}
