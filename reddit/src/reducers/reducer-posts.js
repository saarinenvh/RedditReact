export default(state = [], action) => {
  console.log(state)
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      if (action.posts.toString() != state.toString()) {
          return action.posts;
      }
      break;
    case 'MOVE_LEFT':
      var start = action.posts.slice(5, action.posts.length)
      var end = action.posts.slice(0,5)
      return start.concat(end)
    case 'MOVE_RIGHT':
      var start = action.posts.slice(action.posts.length-5, action.posts.length)
      var end = action.posts.slice(0,action.posts.length-5)
      return start.concat(end)
    }
    return state;
};
