import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RegisterFormComponent extends Component {
  @service register;
  @service store;
  @service router;
  @service('websockets') websockets;
  socketRef = null;

  @tracked emailValue = '';
  @tracked passwordValue = '';

  @action
  storeEmail(event) {
    this.emailValue = event.target.value;
  }

  @action
  storePassword(event) {
    this.passwordValue = event.target.value;
  }

  @action
  storeToUsers() {
    this.register.addNewUser(this.emailValue, this.passwordValue);
    this.router.transitionTo('chats');
    this.openWebSocketConnection();
  }

  @action
  openWebSocketConnection() {
    const socket = this.websockets.socketFor('wss://localhost:7000/');

    socket.on('open', this.onOpenedConnection, this);
  }

  @action
  onOpenedConnection() {
    console.log('WebSocketConnection opened.');
  }
}
