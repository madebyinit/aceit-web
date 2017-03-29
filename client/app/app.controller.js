import firebase from 'firebase';

class AppController {
  constructor($state) {
    this.$state = $state;
    this._initFireBase();
    this._startApp();
  }

  _startApp(){
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
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

  static AppFactory($state) {
    return new AppController($state);
  }
}

AppController.AppFactory.$inject = ['$state'];
export default AppController.AppFactory;
