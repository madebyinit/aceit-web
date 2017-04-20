import firebase from 'firebase';

class AppController {
  constructor($state,$rootScope,notificationsService) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.notificationsService = notificationsService;
    this._initFireBase();
    this._startApp();
  }

  _startApp(){
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        this.$rootScope.user = user;
        this.$state.go('home');
      } else {
        this.$state.go('loginView.login');
      }
    });
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

  static AppFactory($state,$rootScope,notificationsService) {
    return new AppController($state,$rootScope,notificationsService);
  }
}

AppController.AppFactory.$inject = ['$state','$rootScope','notificationsService'];
export default AppController.AppFactory;
