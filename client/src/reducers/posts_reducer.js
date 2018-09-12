export default function postsReducer(state = {
  loading: false,
  posts: [],
  comments: []
}, action) {
  switch (action.type) {
    case 'LOADING_POSTS':
      return { ...state, loading: true }

    case 'FETCH_POSTS':
      return { loading: false, posts: action.payload }

    case 'ADDED_POST':
      const post = { id: action.id, title: action.title, content: action.content, author: action.author, comments: [] }
      return { ...state, posts: [...state.posts, post]}

    case 'DELETED_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      }

    default:
      return state;
  }
}
