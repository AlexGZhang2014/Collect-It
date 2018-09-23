export default function commentsReducer(state = {
  loading: false,
  adding: false,
  deleting: false,
  updating: false,
  comments: []
}, action) {
  switch (action.type) {
    case 'LOADING_COMMENTS':
      return { ...state, loading: true }

    case 'FETCH_COMMENTS':
      return { ...state, loading: false, comments: action.payload }

    case 'ADDING_COMMENT':
      return { ...state, adding: true }

    case 'ADDED_COMMENT':
      const comment = { id: action.id, content: action.content, author: action.author, post: action.post };

      return {
        ...state,
        adding: false,
        comments: [...state.comments, comment]
      }

    case 'DELETING_COMMENT':
      return { ...state, deleting: true }

    case 'DELETED_COMMENT':
      return {
        ...state,
        deleting: false,
        comments: state.comments.filter(comment => comment.id !== action.id)
      }

    case 'UPDATING_COMMENT':
      return { ...state, updating: true }

    case 'UPDATED_COMMENT':
      const editedComment = {
        id: action.id,
        content: action.content,
        author: action.author,
        post: action.post
      };

      let newState = {
        ...state,
        updating: false,
        comments: state.comments.map(comment => {
          if (comment.id !== action.id) {
            return comment;
          }
          return editedComment;
        })
      };

      return newState;

    default:
      return state;
  }
}
