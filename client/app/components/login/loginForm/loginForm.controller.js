import firebase from 'firebase';

class LoginFormController {
  constructor($state,notificationsService) {
    this.$state = $state;
    this.notificationsService = notificationsService;
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res)=>{
      this.$state.transitionTo('home');
    },(error)=>{
      this.notificationsService.showToast(error.message);
    })
  }
}

LoginFormController.$inject = ['$state','notificationsService'];
export default LoginFormController;
