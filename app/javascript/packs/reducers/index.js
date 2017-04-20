const chatApp  = (state, action) => {

  if (state === undefined) {
    state = {user: null, messages: []}
  }

  switch (action.type) {
    case 'ASSIGN_USER':
      return Object.assign({}, state, {user: action.user})
    default:
      return state
  }
}

export default chatApp
