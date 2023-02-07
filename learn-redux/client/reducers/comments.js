// a reducer takes in two things:
// 1. the action (information about what happend)
// 2. A copy of current state

const postComments = (state= [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        ...state, 
        {
          user: action.author,
          text: action.comment
        }];
    case  'REMOVE_COMMENT':
      console.log('Removing a comment')
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state= [], action) {
  console.log('The posts will change')
  console.log(state, action)
  if(typeof action.postId !== 'undefined')
  return {
    // take the current state
    ...state,
    // overwrite this post with a new one
    [action.postId]: postComments(state[action.postId], action)

  }
  return state;
}

export default comments;