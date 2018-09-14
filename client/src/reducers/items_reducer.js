export default function itemReducer(state = {
  loading: false,
  items: []
}, action) {
  switch (action.type) {
    case 'LOADING_ITEMS':
      return { ...state, loading: true }

    case 'FETCH_ITEMS':
      return { loading: false, items: action.payload }
  }
}
