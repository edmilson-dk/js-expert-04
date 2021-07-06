export const constants = {
  socketUrl: "http://localhost:3001",
  socketNamespaces: {
    room: "room",
    lobby: "lobby",
  },
  events: {
    USER_CONNECTED: "userConnection",
    USER_DISCONNECTED: "userDisconnected",
    JOIN_ROOM: "joinRoom",
    LOBBY_UPDATED: "lobbyUpdated",
  }
}