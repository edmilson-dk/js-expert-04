import Attendee from "./entities/attendee.js";
import getTemplate from "./templates/attendeeTemplate.js";

const $imageUser = document.querySelector("#imgUser");
const $roomTopic = document.querySelector("#pTopic");
const $gridSpeakers = document.querySelector("#gridSpeakers");
const $gridAttendees = document.querySelector("#gridAttendees");

export default class View {
  static updateUserImage({ img, username }) {
    $imageUser.src = img;
    $imageUser.alt = username;
  }

  static updateRoomTopic({ topic }) {
    $roomTopic.innerText = topic;
  }


  static updateAttendeesOnGrid(users) {
    users.forEach(item => View.addAttendeeOnGrid(item));
  }

  static addAttendeeOnGrid(item) {
    const attendee = new Attendee(item);
    const htmlTemplate = getTemplate(attendee);

    const baseElement = attendee.isSpeaker ? $gridSpeakers : $gridAttendees;
    baseElement.innerHTML += htmlTemplate;
  }
}