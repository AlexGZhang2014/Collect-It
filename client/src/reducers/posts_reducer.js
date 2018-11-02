export default function postsReducer(state = {
  loading: false,
  adding: false,
  deleting: false,
  updating: false,
  posts: []
}, action) {
  switch (action.type) {
    case 'LOADING_POSTS':
      return { ...state, loading: true }

    case 'FETCH_POSTS':
      return { ...state, loading: false, posts: action.payload }

    case 'ADDING_POST':
      return { ...state, adding: true }

    case 'ADDED_POST':
      const post = { id: action.id, title: action.title, content: action.content, author: action.author, comments: [] };

      return {
        ...state,
        adding: false,
        posts: [...state.posts, post]
      }

    case 'DELETING_POST':
      return { ...state, deleting: true }

    case 'DELETED_POST':
      return {
        ...state,
        deleting: false,
        posts: state.posts.filter(post => post.id !== action.id)
      }

    case 'UPDATING_POST':
      return { ...state, updating: true }

    case 'UPDATED_POST':
      const editedPost = {
        id: action.id,
        title: action.title,
        content: action.content,
        author: action.author,
        comments: action.comments
      };

      let newState = {
        ...state,
        updating: false,
        posts: state.posts.map(post => {
          if (post.id !== action.id) {
            return post;
          }
          return editedPost;
        })
      };

      return newState;

    case 'SORT_POSTS':
      let sortedState = {
        ...state,
        posts: [...state.posts].sort((a, b) => b.likes.length - a.likes.length)
      }

      return sortedState;

    default:
      return state;
  }
}
