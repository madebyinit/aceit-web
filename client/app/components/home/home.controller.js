import firebase from 'firebase';

class HomeController {
  constructor($state) {
    this.$state = $state;
  }

  logout(){
    firebase.auth().signOut().then((res)=> {
      this.$state.go('loginView.login');
    }).catch((error)=> {
      console.log(error)
    });
  }
}
HomeController.$inject = ['$state'];
export default HomeController;
