FROM node:alpine

WORKDIR /usr/src/app

COPY ./dist/portfolio /usr/src/app

CMD ["ng", "serve", "--host", "0.0.0.0"]