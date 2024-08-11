FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
RUN npm install pm2 -g
COPY . .
EXPOSE 4501
ENTRYPOINT ["pm2-runtime", "ecosystem.config.js"]