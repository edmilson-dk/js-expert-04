export default class RoomController {
  constructor({ socketBuilder, roomInfo }) {
    this.socketBuilder = socketBuilder;
    this.roomInfo = roomInfo;
  }

  async initialize() {

    const socket = socketBuilder
      .setOnUserConnected((user) => console.log("User connected: ", user))
      .setOnUserDisconnected((user) => console.log("User disconnected: ", user))
      .setOnRoomUpdated((room) => console.log("room list: ", room))
      .build();

    socket.emit(constants.events.JOIN_ROOM, this.roomInfo);
  }
}