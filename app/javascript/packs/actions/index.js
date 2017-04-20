
export const run = () => {
  return (dispatch, getState) => {
    dispatch(assignUser());
    return dispatch(joinUser(getState().user));
  };
}

export const joinUser = (user) => {
  return {
    type: 'MESSAGES_LOADED',
    messages: [{id: 0, user: 'Chat bot', body: `User ${user} joined to the conversation.`}]
  }
}

export const assignUser = () => {
  const user =  'u' + Math.floor(Math.random() * 1000).toString();
  return {
    type: 'ASSIGN_USER',
    user: user
  }
}


