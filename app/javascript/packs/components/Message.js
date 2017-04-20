import React from 'react';

const Message = ({ user, body, id}) =>
  <li>
    <span>{user}:&nbsp;</span>
    {body}
  </li>

export default Message
