export default class Attendee {
  constructor ({ id, username, img, isSpeaker, roomId, peerId }) {
    this.id = id;
    this.img = img || "https://placehold.it/50x50";
    this.isSpeaker = isSpeaker;
    this.roomId = roomId;
    this.peerId = peerId;

    const name = username || "Usúario Anônimo";
    this.username = name;
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
  }
}