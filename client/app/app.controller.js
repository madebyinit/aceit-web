import consts from './consts.js';
import firebase from 'firebase';

class AppController {
  constructor($state,$rootScope,notificationsService,$transitions,stateChangeService) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$rootScope.imageCdn = consts.imageCdn;
    this.$rootScope.videoCdn = consts.videoCdn;
    this.notificationsService = notificationsService;
    this.stateChangeService = stateChangeService;
    this._initFireBase();
    this._startApp();
  }

  _startApp(){
    this.stateChangeService.appInit();
    this.stateChangeService.stateChange();
  }

  _initFireBase(){
    let config = {
      apiKey: "AIzaSyBkZ1oJc1iLD9_BxhuMycmHQ_UbkJ7r50U",
      authDomain: "ace-it-8b4e2.firebaseapp.com",
      databaseURL: "https://ace-it-8b4e2.firebaseio.com",
      storageBucket: "ace-it-8b4e2.appspot.com",
      messagingSenderId: "907776585475"
    };
    firebase.initializeApp(config);
  }

  static AppFactory($state,$rootScope,notificationsService,$transitions,stateChangeService) {
    return new AppController($state,$rootScope,notificationsService,$transitions,stateChangeService);
  }
}

AppController.AppFactory.$inject = ['$state','$rootScope','notificationsService','$transitions','stateChangeService'];
export default AppController.AppFactory;
