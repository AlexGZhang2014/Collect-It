import cuid from 'cuid';
export const cuidFn = cuid;

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

    case 'ADD_POST':
      const post = { id: cuidFn(), title: action.title, content: action.content, author: action.author, comments: [] }
      return { ...state, posts: [...state.posts, post]}

    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      }

    default:
      return state;
  }
}
