export default class RoomController {
  constructor({ socketBuilder, roomInfo }) {
    this.socketBuilder = socketBuilder;
    this.roomInfo = roomInfo;
  }

  static async initialize(dependencies) {
    return new RoomController(dependencies)._initialize();
  }

  async _initialize() {
    const socket = socketBuilder
      .setOnUserConnected((user) => console.log("User connected: ", user))
      .setOnUserDisconnected((user) => console.log("User disconnected: ", user))
      .setOnRoomUpdated((room) => console.log("room list: ", room))
      .build();

    socket.emit(constants.events.JOIN_ROOM, this.roomInfo);
  }
}