import firebase from 'firebase';

class firebaseService {
  constructor($q,$state) {
    this.$q = $q;
    this.$state = $state;
    this.firebase = firebase;
    this.auth = this.firebase.auth();
    this.user = {};
  }

  getUser(){
    return this.firebase.auth().currentUser;
  }

  startApp(){
    this.firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        this.$rootScope.dataReady = true;
        this.$rootScope.user = user;
        this.$state.go('home');
      } else {
        this.$state.go('loginView.login');
      }
    });
  }

  logout(){
    this.firebase.auth().signOut().then((res)=> {
      this.$state.go('login');
    }).catch((error)=> {
      console.log(error);
    });
  }
}

firebaseService.$inject = ['$q','$state'];
export default firebaseService;
