
// action to move slider to left
export const moveLeft = (posts) => {
  console.log(posts);
  return {
    type: "MOVE_LEFT",
    posts: posts
  }
};

// action to move slider to right
export const moveRight = (posts) => {
  console.log("You clicked on moveright");
  return {
    type: "MOVE_RIGHT",
    posts: posts
  }
};
