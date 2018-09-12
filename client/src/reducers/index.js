import { combineReducers } from 'redux'
import postsReducer from './posts_reducer'
import collectionsReducer from './collections_reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  collections: collectionsReducer
})

export default rootReducer
