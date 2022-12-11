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
  addNewUser({ email, password }) {
    let user = new UserModel(email, password);
    this.allLoggedInUsers.push(user);
    fetch("/user").then((data) => {
      this.allLoggedInUsers.push;
    });
  }

  @action
  getUsers(){
    fetch("/user").then((data) => {
      console.log(data);
    })
  }

  @action
  printAllUsers() {
    console.log(this.allLoggedInUsers);
  }
}
