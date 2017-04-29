import firebase from 'firebase';

class LoginFormController {
  constructor($state,notificationsService,progressLinear,stateChangeService) {
    this.$state = $state;
    this.stateChangeService = stateChangeService;
    this.notificationsService = notificationsService;
    this.progressLinear = progressLinear;
  }

  login(){
    if(this.email && this.password){
      this.progressLinear.showProgress();
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res)=>{
        this.stateChangeService.saveUserData(res);
        this.progressLinear.hideProgress();
        this.$state.transitionTo('home');
      },(error)=>{
        this.progressLinear.hideProgress();
        this.notificationsService.showToast(error.message);
      })
    }else{
      this.validEmail = _.isEmpty(this.email) && 'Missing E-mail';
      this.validPassword = _.isEmpty(this.password) && 'Missing Password';
    }
  }
}

LoginFormController.$inject = ['$state','notificationsService','progressLinear','stateChangeService'];
export default LoginFormController;
