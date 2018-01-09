FROM node:8.5.0

COPY . /source

WORKDIR /source

RUN npm install


EXPOSE 9000

CMD ["npm", "start"]