const $imageUser = document.querySelector("#imgUser");
const $roomTopic = document.querySelector("#pTopic");

export default class View {
  static updateUserImage({ img, username }) {
    $imageUser.src = img;
    $imageUser.alt = username;
  }

  static updateRoomTopic({ topic }) {
    $roomTopic.innerText = topic;
  }
}