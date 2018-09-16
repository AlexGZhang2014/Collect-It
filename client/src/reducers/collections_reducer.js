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

    case 'DELETED_COLLECTION':
      return {
        ...state,
        collections: state.collections.filter(collection => collection.id !== action.id)
      }

    case 'UPDATED_COLLECTION':
      const editedCollection = {
        id: action.id,
        name: action.name,
        description: action.description,
        owner: action.owner,
        items: action.items,
        reviews: action.reviews
      };

      let newState = {
        ...state,
        collections: state.collections.map(collection => {
          if (collection.id !== action.id) {
            return collection;
          }
          return editedCollection;
        })
      };

      return newState;

    default:
      return state;
  }
}
