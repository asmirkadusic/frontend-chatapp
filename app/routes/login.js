import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LoginRoute extends Route {
  // logika odavdje bi u sustini trebala da ide u controller. Ovo je samo pokazni dio
  @service store;

  async model() {
    return this.store.findAll('user');
  }

}
