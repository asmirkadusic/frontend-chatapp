import Route from '@ember/routing/route';

export default class LoginRoute extends Route {
  // logika odavdje bi u sustini trebala da ide u controller. Ovo je samo pokazni dio
  setupController(controller, model) {
    super.setupController(controller, model);
    const name = 'Antonela';
    controller.set('name', name);
  }
}
