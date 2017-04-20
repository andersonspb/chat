import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions'

let NewMessageForm = ({ dispatch }) => {
  let input

  return (
    <div className="row">
      <div className="col-sm-10">
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }

          dispatch(sendMessage(input.value))
          input.value = ''
        }}>
          <textarea className="form-control" rows="3" ref={node => {input = node}}/>
          <em>You have 45 letters</em>
        </form>
      </div>
      <div className="col-sm-2">
        <button type="submit" className="btn btn-primary btn-lg">
        Send
        </button>
      </div>
    </div>
  )
}
NewMessageForm = connect()(NewMessageForm)

export default NewMessageForm
