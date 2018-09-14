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

    default:
      return state;
  }
}
