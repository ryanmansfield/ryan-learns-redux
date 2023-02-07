// a reducer takes in two things:
// 1. the action (information about what happend)
// 2. A copy of current state

function posts(state= [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      // return updated state
      console.log('Incrementing Likes!!')
      const i = action.index
      return [
        ...state.slice(0,i), // before the one we are updating
        {... state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after one we are updating

      ]

    default:
      return state;
  }
}

export default posts;