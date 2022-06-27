const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8008;

const server = http.createServer(app);
console.log("Server Running on port : ", port);
server.listen(port);