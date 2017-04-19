class Message < ApplicationRecord
  validates :body, presence: true

  scope :received_after, ->(moment)  { where("id > ?", moment)}

  def display_time
    created_at.localtime.strftime('%H:%M')
  end
end
