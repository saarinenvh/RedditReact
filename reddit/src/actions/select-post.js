
export const selectPost = (post) => {
  console.log("You clicked on Post: ", post.data.url );
  return {
    type: "POST_SELECTED",
    payload: post
  }
};

export const nextPost = (posts) => {
  console.log("AUTONEXT"+ posts )
  return {
    type: "NEXT_POST",
    posts: posts
  }
};
