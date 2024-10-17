const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Use the static file
const data = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8');
console.log('Data from db.json:', data); 

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`);
});
