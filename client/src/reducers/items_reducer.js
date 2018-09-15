export default function itemReducer(state = {
  loading: false,
  items: []
}, action) {
  switch (action.type) {
    case 'LOADING_ITEMS':
      return { ...state, loading: true }

    case 'FETCH_ITEMS':
      return { loading: false, items: action.payload }

    case 'ADDED_ITEM':
      const item = { id: action.id, name: action.name, description: action.description, collection: action.collection };

      return {
        ...state,
        items: [...state.items, item]
      }

    case 'DELETED_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }

    case 'UPDATED_ITEM':
      const editedItem = {
        id: action.id,
        name: action.name,
        description: action.description,
        collection: action.collection
      };

      let newState = {
        ...state,
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
