import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email_;
  @attr('string') password_;

  get user() {
    return '${this.email_} ${this.password_}';
  }
}
