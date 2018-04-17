FROM node:9.9.0-alpine

WORKDIR /usr/src/api

RUN npm install -g strapi@3.0.0-alpha.11.3

COPY strapi.sh ./
RUN chmod +x ./strapi.sh

EXPOSE 1337

COPY healthcheck.js ./
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s \
      CMD node /usr/src/api/healthcheck.js

CMD ["./strapi.sh"]
