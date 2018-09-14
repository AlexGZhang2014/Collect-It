import { combineReducers } from 'redux'
import postsReducer from './posts_reducer'
import collectionsReducer from './collections_reducer'
import commentsReducer from './comments_reducer'
import reviewsReducer from './reviews_reducer'
import itemsReducer from './items_reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  collections: collectionsReducer,
  comments: commentsReducer,
  reviews: reviewsReducer,
  items: itemsReducer
})

export default rootReducer
