import Service from '@ember/service';
import UserModel from '../models/user';
import { action } from '@ember/object';
import DS from 'ember-data';
import RoomsComponent from '../components/rooms';

export default class LoginService extends Service {
  @action
  checkUser(email, password) {
    let data = { user: { email: email, password: password } };
    let usersDatabase = fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Request complete! Response: ', res.text());
    });
  }

  @action
  setUpWebSocketConnection() {
    let socket = new WebSocket('ws://localhost:3000/cable');
    socket.onopen = (event) => {
      console.log('WebSocket connection established!');

      socket.send(
        JSON.stringify({ username: 'asmirko', didSomeAction: 'pressedButton' })
      );
    };

    socket.onmessage = (event) => {
      const response = event.data;
      const msg = JSON.parse(response);

      if (msg.type === 'ping') {
        return;
      }

      if (msg.message) {
        console.log('Message: ' + msg.message);
      }
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed!');
    };

    socket.onerror = function (event) {
      console.log('Error occured: ' + event.data);
    };
  }
}
