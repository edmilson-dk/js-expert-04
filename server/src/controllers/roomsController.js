import Attendee from "../entities/attendee.js";
import { constants } from "../util/constants.js";

export default class RoomsController {
  #users = new Map();

  constructor() {
    this.rooms = new Map();
  }

  #updateGlobalUserData(userId, userData = {}, roomId = "") {
    const user = this.#users.get(userId) ?? {};
    const existingRoom = this.rooms.has(roomId);

    const updatedUserData = new Attendee({
      ...user,
      ...userData,
      roomId,
      isSpeaker: !existingRoom
    });

    this.#users.set(userId, updatedUserData);

    return this.#users.get(userId);
  }

  onNewConnection(socket) {
    const { id } = socket;
    console.log("connection stablished with #", id);
    this.#updateGlobalUserData(id);
  }

  joinRoom(socket, { user, room }) {
    const userId = user.id = socket.id;
    const roomId = room.id;

    const updatedUserData = this.#updateGlobalUserData(
      userId,
      user,
      roomId
    );

    console.log({ updatedUserData });
    socket.emit(constants.events.USER_CONNECTED, updatedUserData);
  }

  getEvents() {
    const functions = Reflect.ownKeys(RoomsController.prototype)
      .filter(fn => fn !== 'constructor' && fn !== "getEvents")
      .map(name => [name, this[name].bind(this)]);

    return new Map(functions);
  }
}