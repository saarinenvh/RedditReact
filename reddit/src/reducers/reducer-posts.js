// This reducer modifies all the post data

export default(state = [], action) => {

  switch (action.type) {

    case 'FETCH_POSTS_SUCCESS':

      // Checks if the posts have changed
      if (action.posts.toString() !== state.toString()) {
          return action.posts;
      }
      break;

      // Changes the visible list to left by 5
    case 'MOVE_LEFT':
      var start = action.posts.slice(6, action.posts.length)
      var end = action.posts.slice(0,6)
      return start.concat(end)

      // Changes the visible list to right by 5
    case 'MOVE_RIGHT':
      start = action.posts.slice(action.posts.length-6, action.posts.length)
      end = action.posts.slice(0,action.posts.length-6)
      return start.concat(end)

    default:
      return state;
    }
    return state;
};
