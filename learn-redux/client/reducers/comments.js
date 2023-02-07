// a reducer takes in two things:
// 1. the action (information about what happend)
// 2. A copy of current state

function comments(state= [], action) {
  console.log("The posts will change")
  console.log(state, action)
  
  return state;
}

export default comments;