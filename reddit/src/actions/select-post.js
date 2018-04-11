
// selects posts after clicked
export const selectPost = (post) => {
  console.log("You clicked on Post: ", post.data.url );
  return {
    type: "POST_SELECTED",
    payload: post
  }
};

// action to rotate array to show posts
export const nextPost = (posts) => {
  return {
    type: "NEXT_POST",
    posts: posts
  }
};
