const Message = ({ user, body }) =>
  <li>
    <span style="font-weight: bold">{user}:</span>
    {body}
  </li>

export default Message
