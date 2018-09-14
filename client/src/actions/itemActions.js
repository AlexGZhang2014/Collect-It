export function fetchItems() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ITEMS' });
    return fetch('/api/v1/items.json')
      .then(response => response.json())
      .then(itemData => dispatch({
        type: 'FETCH_ITEMS',
        payload: itemData
      }));
  }
}
