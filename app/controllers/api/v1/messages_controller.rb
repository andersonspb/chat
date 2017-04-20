class Api::V1::MessagesController < ApplicationController

  def index
    unless (moment = params[:moment])
      render_error("'moment' is a required parameter")
      return
    end

    new_messages =  Message.received_after(moment)
    render_messages(new_messages, new_messages.maximum(:id)||moment)
  end

  def create
    message = Message.new(message_params)
    message.save
    render_message(message)
  end

  def join
    unless (user = params[:user])
      render_error("'user' is a required parameter")
      return
    end

    message = Message.create!(user: 'Nobody', body: "User #{user} joined to the conversation")
    render_messages([message], message.id)
  end

  private

  def message_params
    params.require(:message).permit(:user, :body)
  end

  def render_messages(messages, moment)
    render json: messages, meta: { moment: moment}
  end

  def render_message(message)
    render json: message, meta: { moment: message.id}
  end

  def render_error(details, status: 400)
    render(
      json:
        {
          errors: [
            {
              status: status,
              details: details
            }
        ]
      },
      status: status)
  end
end
