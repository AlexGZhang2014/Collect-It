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

    default:
      return state;
  }
}
