import {combineReducers} from 'redux';
import ActivePostReducer from './reducer-post-active'
import PostsReducer from './reducer-posts'
import PostsSlider from './reducer-posts-slider'



const allReducers = combineReducers({
  activePost: ActivePostReducer,
  allPosts: PostsReducer,
  slider: PostsSlider
});

export default allReducers;
