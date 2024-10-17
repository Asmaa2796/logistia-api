const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router({
  "services": [
    {
      "id": 1,
      "title": "Van transportation",
      "photo": "service1.png",
      "description": "Van transportation is a mode of transport using vans—versatile vehicles designed for carrying passengers or cargo."
    },
    {
      "id": 2,
      "title": "Heavy transportation",
      "photo": "service2.png",
      "description": "Heavy transportation refers to the movement of large or oversized loads that cannot be handled by standard transportation methods. "
    },
    {
      "id": 3,
      "title": "Air Transportation",
      "photo": "service3.png",
      "description": "Air transportation is a mode of transport that involves the movement of people and goods through the air using aircraft."
    },
    {
      "title": "Goods Transportation",
      "photo": "service4.png",
      "description": "This process is essential for businesses to deliver goods to customers, distribute products within supply chains, and manage inventory.",
      "id": 4
    }
  ],
  "blog": [
    {
      "id": 1,
      "title": "The Importance of Transportation in Modern Society",
      "photo": "b1.jpg",
      "description": "Transportation is a crucial component of modern society, enabling the movement of people and goods across various distances. It plays a vital role in economic development, social connectivity, and environmental sustainability. As we navigate the complexities of urbanization and globalization, understanding the different modes of transportation and their impact on our lives becomes increasingly important."
    },
    {
      "title": "The Evolution and Importance of Transportation",
      "photo": "b2.jpg",
      "description": "Transportation is a fundamental aspect of human civilization, enabling the movement of people and goods across various distances. From ancient caravans to modern high-speed trains and electric vehicles, the evolution of transportation has significantly shaped economies, cultures, and societies worldwide.",
      "id": 2
    },
    {
      "title": "Transportation: The Backbone of Modern Society",
      "photo": "b3.jpg",
      "description": "Transportation is essential to the functioning of our modern world, facilitating the movement of people and goods. From ancient trade routes to today’s advanced transportation networks, the evolution of transportation has dramatically influenced economies, cultures, and daily life.",
      "id": 3
    }
  ],
  "users": [
    {
      "id":1,
      "username":"asmaa",
      "password":"1234",
      "role":"admin"
    },
    {
      "id":2,
      "username":"asmaa",
      "password":"123",
      "role":"moderator"
    }
  ]
}); // Use the static file 

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`);
});
