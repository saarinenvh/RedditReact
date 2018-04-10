import {combineReducers} from 'redux';
import ActivePostReducer from './reducer-post-active'
import PostsReducer from './reducer-posts'


const allReducers = combineReducers({
  activePost: ActivePostReducer,
  allPosts: PostsReducer
});

export default allReducers;
