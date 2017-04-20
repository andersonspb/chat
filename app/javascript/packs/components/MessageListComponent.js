import React from 'react';
import Message from './Message';


const MessageListComponent = ({messages}) =>
  <ul>
    { messages.map(msg => <Message key={msg.id} {...msg} />) }
  </ul>

export default MessageListComponent
