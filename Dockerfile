FROM node:14-alpine as base

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install 
ENV PORT 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
CMD ["node", "/usr/src/app/index.js"]