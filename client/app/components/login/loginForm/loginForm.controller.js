import firebase from 'firebase';

class LoginFormController {
  constructor($state,notificationsService) {
    this.$state = $state;
    this.notificationsService = notificationsService;
  }

  login(){
    if(this.email && this.password){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res)=>{
        this.$state.transitionTo('home');
      },(error)=>{
        this.notificationsService.showToast(error.message);
      })
    }else{
      this.validEmail = _.isEmpty(this.email) && 'Missing E-mail';
      this.validPassword = _.isEmpty(this.password) && 'Missing Password';
    }
  }
}

LoginFormController.$inject = ['$state','notificationsService'];
export default LoginFormController;
