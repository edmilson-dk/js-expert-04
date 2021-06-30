import Events from "events";

import RoomsController from "./controllers/roomsController.js";
import { constants } from "./util/constants.js";
import SocketServer from "./util/socket.js";

const PORT = process.env.PORT || 3003;

const socketServer = new SocketServer({ port: PORT });
const server = await socketServer.start();

const roomsController = new RoomsController();

const namespaces = {
  room: { 
    controller: roomsController, 
    eventEmitter: new Events(),
  }
}

const routeConfig = Object.entries(namespaces)
  .map(([namespace, { controller, eventEmitter }]) => {
    const controllerEvents = controller.getEvents();
    eventEmitter.on(
      constants.events.USER_CONNECTED,
      controller.onNewConnection.bind(controller)
    )

    return {
      [namespace]: { events: controllerEvents, eventEmitter }
    }
  })

socketServer.attachEvents({ routeConfig })

console.log("Socket server is running at", server.address().port);