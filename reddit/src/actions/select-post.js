
export const selectPost = (post) => {
  console.log("You clicked on Post: ", post.data.url );
  return {
    type: "POST_SELECTED",
    payload: post
  }
};
