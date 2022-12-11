import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RegisterFormComponent extends Component {
  @service login;
  @service store;

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
    this.login.addNewUser(this.emailValue, this.passwordValue);
    this.login.printAllUsers();
    this.login.getUsers();
    let varijabla = this.store.createRecord('user', {
      email: "Samsung",
      password: "S10"
    });
    varijabla.save();
  }
}
