import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class RegisterFormComponent extends Component {
    @tracked swtichers = document.getElementsByClassName('switcher');
    
    @action
    showLoginOrRegister(){
        // this.switchers.item(0).parentElement.classList.remove('is-active');
        // this.switchers.item(1).parentElement.classList.add('is-active');
        for (let i = 0; i < this.swtichers.length; i++){
            if (!this.swtichers.item(i).parentElement.classList.contains('is-active')){
                this.swtichers.item(i).parentElement.classList.add('is-active');
                this.hideLoginOrRegister();
            }
        }
    }
    
    @action
    hideLoginOrRegister(){
        for (let i = 0; i < this.swtichers.length; i++){
            if(this.swtichers.item(i).parentElement.classList.contains('is-active')){
                this.swtichers.item(i).parentElement.classList.remove('is-active');
            }
        }
    }
}
