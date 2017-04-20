const API_URL = 'http://localhost:3000/api/v1';
const HEADERS = {'Accept': 'application/json', 'Content-Type': 'application/json'};

export const run = () => {
  return (dispatch, getState) => {
    dispatch(assignUser());
    return dispatch(joinUser());
  };
}

export const joinUser = () => {

  return (dispatch, getState) => {
    const user = getState().user;
    let params = JSON.stringify({user: user});

    fetch(`${API_URL}/messages/join`,
      {
        method: 'POST',
        body: params,
        headers: HEADERS
      })
      .then((response) => response.json())
      .then((json) => {dispatch({type: 'MESSAGES_LOADED', messages: json.data});})
      .catch((error) => {
        console.error(error);
      });
  }
}

export const assignUser = () => {
  const user =  'u' + Math.floor(Math.random() * 1000).toString();
  return {
    type: 'ASSIGN_USER',
    user: user
  }
}


