const chatApp  = (state, action) => {

  if (state === undefined) {
    state = {user: null, messages: []}
  }

  switch (action.type) {
    case 'ASSIGN_USER':
      return Object.assign({}, state, {user: action.user})
    case 'MESSAGES_LOADED':
      return Object.assign({}, state, {messages: state.messages.concat(action.messages)})
    default:
      return state
  }
}

export default chatApp
