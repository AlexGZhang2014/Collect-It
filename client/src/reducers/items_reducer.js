export default function itemReducer(state = {
  loading: false,
  adding: false,
  deleting: false,
  updating: false,
  items: []
}, action) {
  switch (action.type) {
    case 'LOADING_ITEMS':
      return { ...state, loading: true }

    case 'FETCH_ITEMS':
      return { ...state, loading: false, items: action.payload }

    case 'ADDING_ITEM':
      return { ...state, adding: true }

    case 'ADDED_ITEM':
      const item = { id: action.id, name: action.name, description: action.description, collection: action.collection };

      return {
        ...state,
        adding: false,
        items: [...state.items, item]
      }

    case 'DELETING_ITEM':
      return { ...state, deleting: true }

    case 'DELETED_ITEM':
      return {
        ...state,
        deleting: false,
        items: state.items.filter(item => item.id !== action.id)
      }

    case 'UPDATING_ITEM':
      return { ...state, updating: true }

    case 'UPDATED_ITEM':
      const editedItem = {
        id: action.id,
        name: action.name,
        description: action.description,
        collection: action.collection
      };

      let newState = {
        ...state,
        updating: false,
        items: state.items.map(item => {
          if (item.id !== action.id) {
            return item;
          }
          return editedItem;
        })
      };

      return newState;

    default:
      return state;
  }
}
