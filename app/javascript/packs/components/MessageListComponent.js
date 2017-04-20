import React from 'react';
import Message from './Message';


const MessageListComponent = ({messages}) =>
  <ul className="messages list-unstyled">
    { messages.map(msg => <Message key={msg.id} message={msg} />) }
  </ul>

export default MessageListComponent
