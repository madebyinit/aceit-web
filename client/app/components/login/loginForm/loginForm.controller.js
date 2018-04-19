import firebase from 'firebase';

class LoginFormController {
  constructor($state, notificationsService, progressLinear, stateChangeService, connection) {
    this.$state = $state;
    this.stateChangeService = stateChangeService;
    this.notificationsService = notificationsService;
    this.progressLinear = progressLinear;
    this.connection = connection;
  }

  login() {
    if (this.email && this.password) {
      this.progressLinear.showProgress();
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res) => {
        this.stateChangeService.saveUserData(res);
        this.connection.setUser();
        this.connection.getData().then((userData) => {
          if (userData && userData.goaceitVisited) {
            this.$state.transitionTo('goaceit');
          } else {
            this.$state.transitionTo('videoPage');
          }
        }, (error) => {
          this.$state.transitionTo('videoPage');
        });
        this.progressLinear.hideProgress();
      }, (error) => {
        this.progressLinear.hideProgress();
        this.notificationsService.showToast(error.message);
        this.$state.transitionTo('videoPage');
      });
    } else {
      this.validEmail = _.isEmpty(this.email) && 'Missing E-mail';
      this.validPassword = _.isEmpty(this.password) && 'Missing Password';
    }
  }
}

LoginFormController.$inject = ['$state', 'notificationsService', 'progressLinear', 'stateChangeService', 'connection'];
export default LoginFormController;
