import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RoomsComponent extends Component {
  @service login;
  @tracked messageValue = '';
  @tracked dataAndTime = '';
  @tracked messages = [];
  @tracked chatRoom;
  @tracked chatName = 'Asmir';

  @action
  getChatName() {
    return this.chatName;
  }

  @action
  getMessageValue() {
    return this.messageValue;
  }

  @action
  storeMessage(event) {
    if (event.keyCode === 13) {
      this.messageValue = event.target.value;
      this.messages.push(this.messageValue);
      event.target.value = '';
    }
  }

  @action
  showMessage() {}
}
