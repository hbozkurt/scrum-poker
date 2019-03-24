FROM node:10-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json  ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.14-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
RUN chown nginx.nginx /usr/share/nginx/html/ -R