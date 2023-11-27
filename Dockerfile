FROM node:14
RUN usermod -d /home/appi -l appi node
WORKDIR /app
RUN npm install
COPY . .
RUN npm run build
USER appi
EXPOSE 3000
CMD ["node", "./build/index.js"]

