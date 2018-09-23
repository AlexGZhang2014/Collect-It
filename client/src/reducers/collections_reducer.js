export default function collectionsReducer(state = {
  loading: false,
  adding: false,
  deleting: false,
  updating: false,
  collections: [],
}, action) {
  switch (action.type) {
    case 'LOADING_COLLECTIONS':
      return { ...state, loading: true }

    case 'FETCH_COLLECTIONS':
      return { ...state, loading: false, collections: action.payload }

    case 'ADDING_COLLECTION':
      return { ...state, adding: true }

    case 'ADDED_COLLECTION':
      const collection = { id: action.id, name: action.name, description: action.description, owner: action.owner, items: [], reviews: [] };

      return {
        ...state,
        adding: false,
        collections: [...state.collections, collection]
      }

    case 'DELETING_COLLECTION':
      return { ...state, deleting: true }

    case 'DELETED_COLLECTION':
      return {
        ...state,
        deleting: false,
        collections: state.collections.filter(collection => collection.id !== action.id)
      }

    case 'UPDATING_COLLECTION':
      return { ...state, updating: true }

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
        updating: false,
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
