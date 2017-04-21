const API_URL = '/api/v1';
const HEADERS = {'Accept': 'application/json', 'Content-Type': 'application/json'};

export const run = () => {
  return (dispatch, getState) => {
    dispatch(assignUser());
    dispatch(joinUser());
  };
}

const startPolling = () => {
  return (dispatch, getState) => {
    setInterval(() => {
      dispatch(loadMessages())
    }, 3000);
  }
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
      .then((json) => {
        dispatch({type: 'MESSAGES_LOADED', messages: json.data, moment: json.meta.moment});
        dispatch(startPolling());
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export const sendMessage = (text) => {

  return (dispatch, getState) => {
    const user = getState().user;
    let params = JSON.stringify({user: user, body: text});

    fetch(`${API_URL}/messages`,
      {
        method: 'POST',
        body: params,
        headers: HEADERS
      })
      .then((response) => response.json())
      .then((json) => {
        dispatch({type: 'MESSAGES_LOADED', messages: [json.data], moment: json.meta.moment});
      })
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

export const loadMessages = () => {

  return (dispatch, getState) => {
    fetch(`${API_URL}/messages?moment=${getState().moment}`,
      {
        method: 'GET',
        headers: HEADERS
      })
      .then((response) => response.json())
      .then((json) => {
        dispatch({type: 'MESSAGES_LOADED', messages: json.data, moment: json.meta.moment});
      })
      .catch((error) => {
        console.error(error);
      });
  }
}


