import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions'

let NewMessageForm = ({ dispatch }) => {
  let input

  let onSubmit = (e) => {
    e.preventDefault();

    if (!input.value.trim()) {
      return
    }

    dispatch(sendMessage(input.value))
    input.value = ''
  }

  return (
    <div className="row">
      <form onSubmit={onSubmit}>
        <div className="col-sm-10">
            <textarea className="form-control" rows="3" ref={node => {input = node}}/>
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-primary btn-lg">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

NewMessageForm = connect()(NewMessageForm)

export default NewMessageForm
