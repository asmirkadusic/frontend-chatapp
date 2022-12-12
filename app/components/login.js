import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginComponent extends Component {
  @service login;

  @tracked email = '';
  @tracked password = '';

  @action
  storeEmail(event) {
    this.email = event.target.value;
  }

  @action
  storePassword(event) {
    this.password = event.target.value;
  }

  @action
  loginUser(){
    this.login.checkUser(this.email, this.password);
  }
}
