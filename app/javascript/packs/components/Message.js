import React from 'react';

const Message = ({message}) =>
  <li>
    <span className="message-user">{message.attributes.user}:</span>
    <span className="message-body">{message.attributes.body}</span>
    <span className="message-time">{message.attributes['display-time']}</span>
  </li>

export default Message
