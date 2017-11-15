FROM node:8-alpine

# Install app dependencies
RUN apk update && apk upgrade && apk add git bash curl

ENV HOME /home/app
COPY package.json $HOME/todo/package.json
WORKDIR $HOME/todo
RUN npm install
ENV PATH $HOME/todo/node_modules/.bin:$PATH

EXPOSE 8080

CMD npm run start
