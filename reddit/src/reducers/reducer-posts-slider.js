// This reducer modifies all the post data

export default(state = [], action) => {

  switch (action.type) {

    case 'FETCH_POSTS_SUCCESS':
      return action.posts

      // Changes the visible list to left by 5
    case 'MOVE_LEFT':
      var start = action.posts.slice(5, action.posts.length)
      var end = action.posts.slice(0,5)
      console.log(start.concat(end).map(n => n.data.title))
      return start.concat(end)

      // Changes the visible list to right by 5
    case 'MOVE_RIGHT':
      start = action.posts.slice(action.posts.length-5, action.posts.length)
      end = action.posts.slice(0,action.posts.length-5)
      return start.concat(end)

    default:
      return state;
    }
};
