class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user, :body, :display_time
end
