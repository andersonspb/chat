import React from 'react';
import Message from './Message';


const MessageListComponent = ({messages}) =>
  <ul>
    { messages.map(msg => <Message key={msg.id} message={msg} />) }
  </ul>

export default MessageListComponent
