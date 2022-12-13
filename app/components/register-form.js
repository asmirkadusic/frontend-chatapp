import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RegisterFormComponent extends Component {
  @service register;
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
    this.register.addNewUser(this.emailValue, this.passwordValue);
  }
}
