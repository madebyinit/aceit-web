const STATE = new WeakMap();

class AppController {
  constructor($state) {
    STATE.set(this, $state);
    this._startApp();
  }

  _startApp(){
    STATE.get(this).go('login');
  }

  static AppFactory($state) {
    return new AppController($state);
  }
}

AppController.AppFactory.$inject = ['$state'];
export default AppController.AppFactory;
