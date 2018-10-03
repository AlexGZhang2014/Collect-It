import { combineReducers } from 'redux'
import postsReducer from './posts_reducer'
import collectionsReducer from './collections_reducer'
import commentsReducer from './comments_reducer'
import reviewsReducer from './reviews_reducer'
import itemsReducer from './items_reducer'
import likesReducer from './likes_reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  collections: collectionsReducer,
  comments: commentsReducer,
  reviews: reviewsReducer,
  items: itemsReducer,
  likes: likesReducer
})

export default rootReducer
