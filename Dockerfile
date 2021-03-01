FROM node:10 AS builder 

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .

CMD ["nginx","-g","daemon off;"]

