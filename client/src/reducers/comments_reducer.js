export default function commentsReducer(state = {
  loading: false,
  comments: []
}, action) {
  switch (action.type) {
    case 'LOADING_COMMENTS':
      return { ...state, loading: true }

    case 'FETCH_COMMENTS':
      return { loading: false, comments: action.payload }

    case 'ADDED_COMMENT':
      const comment = { id: action.id, content: action.content, author: action.author, post: action.post };

      return {
        ...state,
        comments: [...state.comments, comment]
      }

    case 'DELETED_COMMENT':
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== comment.id)
      }

    default:
      return state;
  }
}
