export default function fetchCollections() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COLLECTIONS' });
    return fetch('/api/v1/collections.json')
      .then(response => response.json())
      .then(collectionData => dispatch({ type: 'FETCH_COLLECTIONS', payload: collectionData }));
  }
}
