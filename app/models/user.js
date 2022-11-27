import Model, { attr } from '@ember-data/model';
import DS from 'ember-data';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') password;
}
