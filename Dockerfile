FROM --platform=linux/amd64 node:lts-alpine3.20 as storybook-build
RUN apk add --no-cache \
  git \
  openssh
WORKDIR /app
RUN git clone https://github.com/epfl-sti/epfl-elements-rf.git && npm ci && npm run build-storybook

# server environment
FROM --platform=linux/amd64 nginx:stable-alpine
COPY --from=storybook-build /app/storybook-static /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8887
