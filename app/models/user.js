import Model, { attr } from '@ember-data/model';
import DS from 'ember-data';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') password;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes

  // get user() {
  //   return '${this.email} ${this.password}';
  // }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}
