import Axios from 'axios'

// url to fetch data
const apiUrl = 'https://www.reddit.com/r/funny.json';

export const fetchPostsSuccess = (posts) => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    posts: posts.data.children,
  }
};

export const fetchPosts = () => {

  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchPostsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
    };
  };
