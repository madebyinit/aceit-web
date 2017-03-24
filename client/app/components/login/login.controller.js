const STATE = new WeakMap();

class LoginController {
  constructor($state) {
    STATE.set(this, $state);
  }

  changeState(state){
    STATE.get(this).go(state);
  }
}

LoginController.$inject = ['$state'];
export default LoginController;
