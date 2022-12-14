import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import UserModel from '../models/user';

export default class LoginService extends Service {
  @tracked allLoggedInUsers = [
    { 'asmir@gmail.com': 'password' },
    { 'antonela@gmail.com': 'nela' },
  ];

  @action
  getUsers() {
    fetch('/user').then((data) => {
      console.log(data);
    });
  }

  @action
  printAllUsers() {
    console.log(this.allLoggedInUsers);
  }

  @action
  addNewUser(email, password) {
    let User = new UserModel(email, password);
    let data = { user: { email: email, password: password } };
    let usersDatabase = fetch('/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Request complete! Response: ', res);
    });
  }

  @action
  redirectToPage(pathToRedirection) {
    this.router.transitionTo(pathToRedirection);
  }
}
