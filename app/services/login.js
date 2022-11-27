import Service from '@ember/service';
<<<<<<< HEAD
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import UserModel from '../models/user';

export default class LoginService extends Service {
  @tracked allLoggedInUsers = [
    { 'asmir@gmail.com': 'password' },
    { 'antonela@gmail.com': 'nela' },
  ];

  @action
  addNewUser({ email, password }) {
    let user = new UserModel(email, password);
    this.allLoggedInUsers.push(user);
  }

  @action
  printAllUsers() {
    console.log(this.allLoggedInUsers);
  }
=======

export default class LoginService extends Service {
    users = [];

    
>>>>>>> 8a0bc77da93889c571b66d39fa842ca3a52a233e
}
