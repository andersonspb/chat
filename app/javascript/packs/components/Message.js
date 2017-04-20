import React from 'react';

const Message = ({message}) =>
  <li>
    <span>{message.attributes.user}:&nbsp;</span>
    {message.attributes.body}
  </li>

export default Message
