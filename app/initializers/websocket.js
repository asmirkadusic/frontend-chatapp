export function initialize(application) {
  application.inject('route', 'login', 'service:login');
}

export default {
  initialize,
};
