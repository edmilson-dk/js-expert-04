import { constants } from "../../_shared/constants.js";
import RoomController from "./controller.js";
import RoomSocketBuilder from "./util/roomSocket.js";

const room = {
  id: "001",
  topic: "Js expert",
}

const user = {
  img: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sloth_lazybones_sluggard_avatar-512.png",
  username: "Edmilson " + Date.now(),
}

const roomInfo = { user, room };

const socketBuilder = new RoomSocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room,
});

const controller = new RoomController({
  socketBuilder,
  roomInfo
});