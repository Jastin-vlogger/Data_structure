FROM node:alpine
COPY . /app
CMD node /app/tree/tree.js
