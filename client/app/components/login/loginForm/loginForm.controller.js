import firebase from 'firebase';
import { debug } from 'util';

class LoginFormController {
  constructor($state, notificationsService, progressLinear, stateChangeService, connection, orderOfGames) {
    this.$state = $state;
    this.stateChangeService = stateChangeService;
    this.notificationsService = notificationsService;
    this.progressLinear = progressLinear;
    this.connection = connection;
    this.orderOfGames = orderOfGames;
  }

  login() {
    if (this.email && this.password) {
      this.progressLinear.showProgress();
      this.estimationOfResults = {};
      this.gameSequence = [];
      this.level = [];
      this.UPDI = {};

      firebase.auth().signInWithEmailAndPassword('qarea@gmail.com', '123456').then((res) => {
        firebase.database().ref(res.uid).once('value').then((result) => {
          const resu = result.val();
          this.estimationOfResults = resu.estimationOfResults;
          this.gameSequence = resu.gameSequence;
          this.level = resu.level;
          this.UPDI = resu.UPDI;
        });
        this.progressLinear.hideProgress();
      }, (error) => {
        this.progressLinear.hideProgress();
        this.notificationsService.showToast(error.message);
      }).then(() => {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res) => {
          this.stateChangeService.saveUserData(res);
          this.connection.setUser();
          this.connection.getData().then((userData) => {
            if (userData && userData.goaceitVisited) {
              if (userData.gamePage != 'undefined' && userData.gamePage != null) {
                localStorage.setItem('gamePage', location.pathname);
              }
              if (userData.gamePageSecond != 'undefined' && userData.gamePageSecond != null) {
                localStorage.setItem('gamePageSecond', location.pathname);
              }
              if (userData.Summary != 'undefined' && userData.Summary != null) {
                localStorage.setItem('Summary', location.pathname);
              }
              
              this.connection.saveData(this.gameSequence, 'gameSequence');
              this.connection.saveData(this.level, 'level');
              this.connection.saveData(this.UPDI, 'UPDI');
              this.connection.saveData(this.estimationOfResults, 'estimationOfResults');
              this.orderOfGames = {
                gameSequence: this.gameSequence,
                level: this.level,
                UPDI: this.UPDI,
              };
              this.$state.transitionTo('goaceit');
            } else {
              if (this.email.toLowerCase() !== 'qarea@gmail.com') {
                this.connection.saveData(false, 'admin');
              }
              if (userData.gamePage != 'undefined' && userData.gamePage != null) {
                localStorage.setItem('gamePage', location.pathname);
              }
              if (userData.gamePageSecond != 'undefined' && userData.gamePageSecond != null) {
                localStorage.setItem('gamePageSecond', location.pathname);
              }
              if (userData.Summary != 'undefined' && userData.Summary != null) {
                localStorage.setItem('Summary', location.pathname);
              }

              this.connection.saveData(this.gameSequence, 'gameSequence');
              this.connection.saveData(this.level, 'level');
              this.connection.saveData(this.UPDI, 'UPDI');
              this.connection.saveData(this.estimationOfResults, 'estimationOfResults');
              this.orderOfGames = {
                gameSequence: this.gameSequence,
                level: this.level,
                UPDI: this.UPDI,
              };
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
      });


    } else {
      this.validEmail = _.isEmpty(this.email) && 'Missing E-mail';
      this.validPassword = _.isEmpty(this.password) && 'Missing Password';
    }
  }
}

LoginFormController.$inject = ['$state', 'notificationsService', 'progressLinear', 'stateChangeService', 'connection', 'orderOfGames'];
export default LoginFormController;
