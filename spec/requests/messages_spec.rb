# encoding: utf-8
# frozen_string_literal: true
require 'spec_helper'

describe '/api/v1/messages', type: :request do

  describe 'POST' do

  let(:message_attrs) { {user: '1', body: 'Hello world!'} }

    context 'when posted valid message attributes' do
      def post_message
        post('/api/v1/messages.json', params: {message: message_attrs})
      end

      it 'returns success HTTP response' do
        post_message
        expect(response).to have_http_status(:success)
      end

      it 'creates new Message record' do
        expect { post_message }.to change { Message.count }.by 1
      end

      it 'created message attributes match with posted attributes' do
        post_message
        expect(Message.last.attributes.symbolize_keys.slice(:user, :body)).to eq(message_attrs)
      end
    end
  end

  describe 'GET' do

    let!(:msg1) { FactoryGirl.create(:message) }
    let!(:msg2) { FactoryGirl.create(:message) }

    def get_new_messages(moment: nil)
      get('/api/v1/messages.json', params: {moment: moment})
    end

    it 'returns success HTTP response' do
      get_new_messages(moment: 123)
      expect(response).to have_http_status(:success)
    end

    it 'returns JSON with 2 messages created from beginning' do
      get_new_messages(moment: 0)
      expect(body_as_json[:data]).to have(2).items
    end

    it 'returns JSON with 1 message' do
      get_new_messages(moment: msg1.id)
      expect(body_as_json[:data]).to have(1).items
    end

    it 'returns JSON with 0 messages' do
      get_new_messages(moment: msg2.id)
      expect(body_as_json[:data]).to have(0).items
    end
  end
end
