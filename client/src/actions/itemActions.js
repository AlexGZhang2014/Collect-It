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

export function addItem(state) {
  return dispatch => {
    dispatch({ type: 'ADDING_ITEM' });

    const itemData = {
      item: {
        name: state.name,
        description: state.description,
        collection_id: state.collectionId
      }
    }

    fetch('/api/v1/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemData)
    })
      .then(response => response.json())
      .then(itemJSON => dispatch({
        type: "ADDED_ITEM",
        id: itemJSON.id,
        name: itemJSON.name,
        description: itemJSON.description,
        collection: itemJSON.collection
      }));
  }
}

export function deleteItem(id) {
  return dispatch => {
    dispatch({ type: 'DELETING_ITEM' });
    if (window.confirm("Are you sure?")) {
      fetch('/api/v1/items/' + id, { method: 'DELETE' })
        .then(response => dispatch({
          type: 'DELETED_ITEM',
          id: id
        }))
    }
  }
}
