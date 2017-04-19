# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :message do
    user { 1 }
    sequence(:body) { |n| "Message #{n}" }
  end
end
