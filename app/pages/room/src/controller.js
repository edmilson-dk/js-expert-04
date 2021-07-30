import { constants } from "../../_shared/constants.js";

export default class RoomController {
  constructor ({ socketBuilder, roomInfo, view }) {
    this.socketBuilder = socketBuilder;
    this.roomInfo = roomInfo;
    this.view = view;
    this.socket = {};
  }

  static async initialize(dependencies) {
    return new RoomController(dependencies)._initialize();
  }

  async _initialize() {
    this._setupViewEvents();
    this.socket = this._setupSocket();
    this.socket.emit(constants.events.JOIN_ROOM, this.roomInfo);
  }

  _setupViewEvents() {
    this.view.updateUserImage(this.roomInfo.user);
    this.view.updateRoomTopic(this.roomInfo.room);
  }

  onUserConnected() {
    return (user) => {
      console.log("user connected: ", user);
      this.view.addAttendeeOnGrid(user);
    };
  }

  onUserDisconnected() {
    return (user) => console.log("user disconnected: ", user);
  }

  onRoomUpdated() {
    return (room) => {
      this.view.updateAttendeesOnGrid(room);
      console.log("room list: ", room);
    };
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