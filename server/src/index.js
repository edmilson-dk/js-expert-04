import SocketServer from "./util/socket.js";

const PORT = process.env.PORT || 3003;

const socketServer = new SocketServer({ port: PORT });
const server = await socketServer.start();

console.log("Socket server is running at", server.address().port);