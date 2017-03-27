import firebase from 'firebase';

class LoginController {
  constructor($state,$mdToast) {
    this.$state = $state;
    this.$mdToast = $mdToast;
  }

  signUp(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((res)=>{
      this.$state.go('home');
      localStorage.setItem('user',JSON.stringify(res));
    },(error)=>{
      this._showToast(error.message);
    })
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.emailLogin, this.passwordLogin).then((res)=>{
      this.$state.go('home');
      localStorage.setItem('user',JSON.stringify(res));
    },(error)=>{
      this._showToast(error.message);
    })
  }

  _showToast(message){
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent(message)
        .position('right')
        .hideDelay(3000)
    );
  }
}

LoginController.$inject = ['$state','$mdToast'];
export default LoginController;
