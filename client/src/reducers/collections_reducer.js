import cuid from 'cuid';
export const cuidFn = cuid;

export default function collectionsReducer(state = {
  loading: false,
  collections: [],
}, action) {
  switch (action.type) {
    case 'LOADING_COLLECTIONS':
      return { ...state, loading: true }

    case 'FETCH_COLLECTIONS':
      return { loading: false, collections: action.payload }

    case 'ADDED_COLLECTION':
      const collection = { id: action.id, name: action.name, description: action.description, owner: action.owner, items: [], reviews: [] };

      return {
        ...state,
        collections: [...state.collections, collection]
      }

    default:
      return state;
  }
}
