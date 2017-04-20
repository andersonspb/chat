import { connect } from 'react-redux'
import MessageListComponent from '../components/MessageListComponent'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const MessageListContainer = connect(
  mapStateToProps,
  null
)(MessageListComponent)

export default MessageListContainer
