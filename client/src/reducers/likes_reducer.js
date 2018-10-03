export default function likesReducer(state = {
  loading: false,
  adding: false,
  likes: []
}, action) {
  switch (action.type) {
    case 'LOADING_LIKES':
      return { ...state, loading: true }

    case 'FETCH_LIKES':
      return { ...state, loading: false, likes: action.payload }

    case 'ADDING_LIKE':
      return { ...state, adding: true }

    case 'ADDED_LIKE':
      const like = { id: action.id, post: action.post };

      return {
        ...state,
        adding: false,
        likes: [...state.likes, like]
      }

    default:
      return state;
  }
}
