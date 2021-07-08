import { constants } from "../../_shared/constants.js";

export default class RoomController {
  constructor({ socketBuilder, roomInfo }) {
    this.socketBuilder = socketBuilder;
    this.roomInfo = roomInfo;
    this.socket = {};
  }

  static async initialize(dependencies) {
    return new RoomController(dependencies)._initialize();
  }

  async _initialize() {
    this.socket = this._setupSocket();
    this.socket.emit(constants.events.JOIN_ROOM, this.roomInfo);
  }

  onUserConnected() {
    return (user) => console.log("user connected: ", user);
  }

  onUserDisconnected() {
    return (user) => console.log("user disconnected: ", user);
  }

  onRoomUpdated() {
    return (room) => console.log("room list: ", room);
  }

  _setupSocket() {
    const socket = this.socketBuilder
      .setOnUserConnected(this.onUserConnected())
      .setOnUserDisconnected(this.onUserDisconnected())
      .setOnRoomUpdated(this.onRoomUpdated())
      .build();

    return socket;
  }
}