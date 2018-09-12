import cuid from 'cuid';
export const cuidFn = cuid;

export default function collectionsReducer(state = {
  loading: false,
  collections: [],
  items: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'LOADING_COLLECTIONS':
      return { ...state, loading: true }

    case 'FETCH_COLLECTIONS':
      return { loading: false, collections: action.payload }

    default:
      return state;
  }
}
