import firebase from 'firebase';
import { debug } from 'util';

class LoginFormController {
  constructor($state, notificationsService, progressLinear, stateChangeService, connection, orderOfGames, helperService) {
    this.$state = $state;
    this.stateChangeService = stateChangeService;
    this.notificationsService = notificationsService;
    this.progressLinear = progressLinear;
    this.connection = connection;
    this.orderOfGames = orderOfGames;
    this.helperService = helperService;
  }

  login() {
    if (this.email && this.password) {
      this.progressLinear.showProgress();
      this.estimationOfResults = {};
      this.gameSequence = [];
      this.level = [];
      this.UPDI = {};

      firebase.database().ref('liPKnd2ZTfUcZV6gZLlLBzN3qAX2').once('value').then(
        (result) => {
          const resu = result.val();
          this.estimationOfResults = resu.estimationOfResults;
          this.gameSequence = resu.gameSequence;
          this.level = resu.level;
          this.UPDI = resu.UPDI;
          // this.helperService.gameSequence();
          // this.helperService.feedbackCounter();
          // this.helperService.Results();
          // this.helperService.feedbackSentences();
          // this.helperService.SuggestedTools();
          // this.helperService.FeedbackChange();
          // this.connection.saveData(this.orderOfGames.gameSequence, 'gameSequence');
          // this.connection.saveData(this.orderOfGames.level, 'level');
          // this.connection.saveData(this.orderOfGames.UPDI, 'UPDI');
          // this.connection.saveData(this.estimationOfResults, 'estimationOfResults');

          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res) => {
          this.stateChangeService.saveUserData(res);
          this.connection.setUser();
          this.connection.getData().then((userData) => {
            if (userData && userData.goaceitVisited) {
              this.connection.saveData(this.gameSequence, 'gameSequence');
              this.connection.saveData(this.level, 'level');
              this.connection.saveData(this.UPDI, 'UPDI');
              this.connection.saveData(this.estimationOfResults, 'estimationOfResults');
              Object.assign(this.orderOfGames, {
                gameSequence: this.gameSequence,
                level: this.level,
                UPDI: this.UPDI,
              });
              if (userData.videoPageFirst != 'undefined' && userData.videoPageFirst != null) {
                localStorage.setItem('videoPageFirst', location.pathname);
              }
              if (userData.gamePage != 'undefined' && userData.gamePage != null) {
                localStorage.setItem('gamePage', location.pathname);
              }
              if (userData.Summary != 'undefined' && userData.Summary != null) {
                localStorage.setItem('Summary', location.pathname);
              }
              if (userData.gamePageSecond != 'undefined' && userData.gamePageSecond != null) {
                localStorage.setItem('gamePageSecond', location.pathname);
              }

              this.$state.transitionTo('goaceit');

            } else {
              this.connection.saveData(this.gameSequence, 'gameSequence');
              this.connection.saveData(this.level, 'level');
              this.connection.saveData(this.UPDI, 'UPDI');
              this.connection.saveData(this.estimationOfResults, 'estimationOfResults');
              this.connection.saveData(false, 'processFinished');

              Object.assign(this.orderOfGames, {
                gameSequence: this.gameSequence,
                level: this.level,
                UPDI: this.UPDI,
              });

              if (this.email.toLowerCase() !== 'ariel@goaceit.com') {
                this.connection.saveData(false, 'admin');
              }
              if (userData.hasOwnProperty('videoPageFirst') && userData.videoPageFirst != 'undefined' && userData.videoPageFirst != null) {
                localStorage.setItem('videoPageFirst', location.pathname);
              }
              if (userData.hasOwnProperty('gamePage') && userData.gamePage != 'undefined' && userData.gamePage != null) {
                localStorage.setItem('gamePage', location.pathname);
              }
              if (userData.hasOwnProperty('Summary') && userData.Summary != 'undefined' && userData.Summary != null) {
                localStorage.setItem('Summary', location.pathname);
              }
              if (userData.hasOwnProperty('gamePageSecond') && userData.gamePageSecond != 'undefined' && userData.gamePageSecond != null) {
                localStorage.setItem('gamePageSecond', location.pathname);
              }
              if (userData.admin) {
                this.$state.transitionTo('games');
                return;
              }
              if (userData.hasOwnProperty('lastPageOpen') && userData.lastPageOpen != 'undefined' && userData.lastPageOpen != null) {
                try {
                  this.$state.transitionTo(userData.lastPageOpen);  
                } catch (err) {
                  this.$state.transitionTo('games');
                }   
              } else {
                this.$state.transitionTo('games');
              }
            }
          }, (error) => {
            this.$state.transitionTo('games');
          });
          this.progressLinear.hideProgress();
        }, (error) => {
          this.progressLinear.hideProgress();
          this.notificationsService.showToast(error.message);
          this.$state.transitionTo('games');
          });
      },
      (err) => {
      this.progressLinear.hideProgress();
      this.notificationsService.showToast(error.message);
      });
      this.progressLinear.hideProgress();
 
    } else {
      this.validEmail = _.isEmpty(this.email) && 'Missing E-mail';
      this.validPassword = _.isEmpty(this.password) && 'Missing Password';
    }
  }
}

LoginFormController.$inject = ['$state', 'notificationsService', 'progressLinear', 'stateChangeService', 'connection', 'orderOfGames', 'helperService'];
export default LoginFormController;
