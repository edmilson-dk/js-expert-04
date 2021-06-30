export default class RoomsController {
  constructor() {

  }

  onNewConnection(socket) {
    const { id } = socket;
    console.log("connection stablished with #",id);
  }

  getEvents() {
    const functions = Reflect.ownKeys(RoomsController.prototype)
      .filter(fn => fn !== 'constructor')
      .map(name => [name, this[name].bind(this)])

    return new Map(functions);
  }
}