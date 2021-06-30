import { constants } from "../util/constants.js";

export default class RoomsController {
  constructor() {}

  onNewConnection(socket) {
    const { id } = socket;
    console.log("connection stablished with #", id);
  }

  joinRoom(socket, data) {
    console.log('dados recebidos', data);
    socket.emit(constants.events.USER_CONNECTED, data);
  }

  getEvents() {
    const functions = Reflect.ownKeys(RoomsController.prototype)
      .filter(fn => fn !== 'constructor' && fn !== "getEvents")
      .map(name => [name, this[name].bind(this)]);

    return new Map(functions);
  }
}