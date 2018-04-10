export const listCreated = (posts) => {
  return {
    type: 'LIST_CREATED_SUCCESFULLY',
    posts: posts
  }
};

export const createList = (posts, i) => {
  if (i + 7 < posts.length - 1){
    listCreated(posts.data.children.slice(0,7))
  } else if (i - 7 < 0){
    listCreated(posts.data.children.slice(posts.data.children.length - 8, posts.data.children.length - 1))
  } else {
    listCreated(posts.data.children.slice(i, i + 7))
  }

};
