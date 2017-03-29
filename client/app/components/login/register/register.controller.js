import firebase from 'firebase';

class RegisterController {
  constructor($state,notificationsService) {
    this.$state = $state;
    this.notificationsService = notificationsService;
  }

  signUp(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res)=>{
      this.$state.transitionTo('home');
    },(error)=>{
      this.notificationsService.showToast(error.message);
    })
  }
}

RegisterController.$inject = ['$state','notificationsService'];
export default RegisterController;
