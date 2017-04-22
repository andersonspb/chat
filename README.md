# Old good polling chat :)

## Features
1. Ruby on Rails 
2. Polling to the server each N seconds! No long polling! No action cable! Hard and fun!
3. React + Redux
4. Docker packed

## Requirements
1. Docker

## Installation

`git clone git@github.com:andersonspb/chat.git`

`cd ./chat`

`WEBPACK_DEV_SERVER_HOST=$(docker-machine ip) docker-compose up`

An IP address website available at depends on your environment. Run the following command to get an actual link to the site: 

`echo http://$(docker-machine ip):3000 `





