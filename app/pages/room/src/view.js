const $imageUser = document.querySelector("#imgUser");

export default class View {
  static updateUserImage({ img, username }) {
    $imageUser.src = img;
    $imageUser.alt = username;
  }
}