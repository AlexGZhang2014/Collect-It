export function fetchCollections() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COLLECTIONS' });
    return fetch('/api/v1/collections.json')
      .then(response => response.json())
      .then(collectionData => dispatch({ type: 'FETCH_COLLECTIONS', payload: collectionData }));
  }
}

export function addCollection(state) {
  return dispatch => {
    dispatch({ type: 'ADDING_COLLECTION' });

    const collectionData = {
      collection: {
        name: state.name,
        description: state.description,
        owner: state.owner
      }
    }

    fetch('/api/v1/collections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(collectionData)
    })
      .then(response => response.json())
      .then(collectionJSON => dispatch({
        type: "ADDED_COLLECTION",
        id: collectionJSON.id,
        name: collectionJSON.name,
        description: collectionJSON.description,
        owner: collectionJSON.owner
      }));
  }
}

export function deleteCollection(id) {
  return dispatch => {
    dispatch({ type: 'DELETING_COLLECTION' });
    if (window.confirm("Are you sure?")) {
      fetch('/api/v1/collections/' + id, { method: 'DELETE' })
        .then(response => dispatch({
          type: 'DELETED_COLLECTION',
          id: id
        }))
    }
  }
}

export function updateCollection(state) {
  return dispatch => {
    dispatch({ type: 'UPDATING_COLLECTION'});

    const editedCollectionData = {
      collection: {
        id: state.id,
        name: state.name,
        description: state.description,
        owner: state.owner,
        items: state.items,
        reviews: state.reviews
      }
    }

    fetch('/api/v1/collections/' + state.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedCollectionData)
    })
      .then(response => response.json())
      .then(collectionJSON => dispatch({
        type: 'UPDATED_POST',
        id: collectionJSON.id,
        name: collectionJSON.name,
        description: collectionJSON.description,
        owner: collectionJSON.owner,
        items: collectionJSON.items,
        reviews: collectionJSON.reviews
      }));
  }
}
