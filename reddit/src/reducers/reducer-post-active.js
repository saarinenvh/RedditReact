
// Switches the state of active post either to selected or next

export default function (state=null,action){
  switch(action.type){

    case "POST_SELECTED":
      return action.payload;
    case "NEXT_POST":
      return action.posts[1];

    default:
      return state;
  }
}
