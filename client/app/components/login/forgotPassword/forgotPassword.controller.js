import firebase from 'firebase';

class ForgotPasswordController {
  constructor(notificationsService) {
    this.auth = firebase.auth();
    this.notificationsService = notificationsService;
  }

  resetPassword(){
    this.auth.sendPasswordResetEmail(this.email).then((res)=> {
      this.notificationsService.showToast(`Reset password sent to your email ${this.email}`);
    }, (error)=> {
      this.notificationsService.showToast(error.message)
    });
  }
}

ForgotPasswordController.$inject = ['notificationsService'];
export default ForgotPasswordController;
