
// Holds all the posts and changes order according to posts that needs to be shows

export default(state = [], action) => {

  switch (action.type) {

    case 'FETCH_POSTS_SUCCESS':

      // Checks if the posts have changed
      if (action.posts.toString() !== state.toString()) {
        return action.posts;
      } else {
        return state;
      }

      case 'NEXT_POST':
          const start = action.posts.slice(1, action.posts.length)
          const end = action.posts.slice(0,1)
          return start.concat(end)
    default:
      return state;
    }
};
