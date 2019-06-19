FROM node:4.8.3-alpine
COPY package.json /
RUN npm install --seve
COPY views /views
COPY   server.js /
CMD [ "npm", "start" ]
EXPOSE 9000