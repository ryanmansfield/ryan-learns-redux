// a reducer takes in two things:
// 1. the action (information about what happend)
// 2. A copy of current state

function posts(state= [], action) {
  console.log(state, action)
  return state;
}

export default posts;