FROM node:14 as build
WORKDIR /app
RUN npm install
COPY . .
RUN npm run build

FROM node:14
COPY --from=build /app/package.json ./
COPY --from=build /app/build ./build
RUN npm install --production
RUN usermod -d /home/appi -l appi node
USER appi
EXPOSE 3000
CMD ["node", "./build/index.js"]