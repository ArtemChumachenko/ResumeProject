FROM node:20

WORKDIR /app

COPY . .

CMD ["npm", "start"]