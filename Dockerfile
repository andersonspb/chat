FROM ruby:2.3.3
RUN apt-get update -qq && apt-get install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get update -qq && apt-get install -y nodejs yarn
RUN mkdir /myapp
WORKDIR /myapp
COPY Gemfile /myapp/
COPY Gemfile.lock /myapp/
RUN bundle install
COPY package.json /myapp/
COPY yarn.lock /myapp/
RUN yarn install
