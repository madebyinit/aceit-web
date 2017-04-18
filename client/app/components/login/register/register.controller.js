import firebase from 'firebase';

class RegisterController {
  constructor($state,notificationsService) {
    this.$state = $state;
    this.notificationsService = notificationsService;
  }

  signUp(){
    if(this.email && this.password && this.fullName){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res)=>{
        res.updateProfile({displayName: this.fullName}).then(()=>{
          this.$state.transitionTo('home');
        });
      },(error)=>{
        this.notificationsService.showToast(error.message);
      })
    }else{
      this.validEmail = _.isEmpty(this.email) && 'Missing E-mail';
      this.validPassword = _.isEmpty(this.password) && 'Missing Password';
      this.validFullname = _.isEmpty(this.fullName) && 'Missing Password';
    }
  }
}

RegisterController.$inject = ['$state','notificationsService'];
export default RegisterController;
