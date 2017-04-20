# Old good polling chat :)

## Features
1. Ruby on Rails 
2. Polling to the server each N seconds! No long polling! No action cable! Hard and fun!
3. React + Redux

## Requirements
1. Ruby 2.3.3
2. Postgresql (Or replace it in Gemfile and database.yml to whatever you comfortable with)
3. Yarn

## Installation

git clone git@github.com:andersonspb/chat.git

cd ./chat

./bin/bundle install

./bin/yarn install

cp ./config/database.yml.sample ./config/database.yml # And adjust settings

./bin/rake db:setup

./bin/webpack-dev-server
 
./bin/rails server

Open http://localhost:3000




