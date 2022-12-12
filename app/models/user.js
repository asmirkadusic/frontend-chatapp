import Model, { attr } from '@ember-data/model';
import DS from 'ember-data';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') password;

  init(email, password){
    this.email = email;
    this.password = password;
    console.log("Mail is ", this.email);
    console.log("Password is ", this.password);
  }

  getEmail(){
    return this.email;
  }

  getPassword(){
    return this.password;
  }
}
