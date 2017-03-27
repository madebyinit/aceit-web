import firebase from 'firebase';

class HomeController {
  constructor($state) {
    this.$state = $state;
  }

  logout(){
    firebase.auth().signOut().then((res)=> {
      debugger;
      this.$state.go('login');
    }).catch((error)=> {
      debugger;
      console.log(error)
    });
  }
}
HomeController.$inject = ['$state'];
export default HomeController;
