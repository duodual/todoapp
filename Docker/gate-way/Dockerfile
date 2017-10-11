FROM node:8.6

ARG DIR

COPY ./src $DIR
WORKDIR $DIR

RUN npm install

EXPOSE 4000

CMD ["node", "server.js"]
