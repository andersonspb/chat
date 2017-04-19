class Api::V1::MessagesController < ApplicationController

  def index
    unless (moment = params[:moment])
      render_error("'moment' is a required parameter")
      return
    end

    messages = Message.received_after(moment)
    new_moment = messages.map(&:id).max
    render json: messages, meta: { moment: new_moment}
  end

  def create
    message = Message.new(message_params)
    message.save
    render json: message
  end

  def join

  end

  private

  def message_params
    params.require(:message).permit(:user, :body)
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
