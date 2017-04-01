import firebase from 'firebase';

class AppController {
  constructor($state,$rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this._initFireBase();
    this._startApp();
  }

  _startApp(){
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.$state.go('home');
        // this.$state.reload();
      } else {
        this.$state.reload();
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

  static AppFactory($state,$rootScope) {
    return new AppController($state,$rootScope);
  }
}

AppController.AppFactory.$inject = ['$state','$rootScope'];
export default AppController.AppFactory;
