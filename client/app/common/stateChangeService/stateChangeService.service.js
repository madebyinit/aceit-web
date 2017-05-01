class StateChangeService {
  constructor($transitions,$state) {
    this.$transitions = $transitions;
    this.$state = $state;
  }

  stateChange(){
    this.$transitions.onSuccess({ to: true, from: true },(data)=>{
      this._checkUserLogin(data);
    });
  }

  appInit(){
    let user = this.getUserData();
    if(_.isEmpty(_.get(user,'uid'))){
      this.$state.go('loginView.login');
    }else{
      this._userFs(user);
    }
  }

  _userFs(user){
      FS.identify(_.get(user,'uid'), {
        displayName: _.get(user,'email'),
        email:_.get(user,'email'),
        // this is an example of a _real number custom variable
        lifetimeSpend_real: 14
      });
  }

  _checkUserLogin(data){
    let user = this.getUserData();
    if(_.isEmpty(_.get(user,'uid'))){
      this.$state.go('loginView.login');
    }
  }

  saveUserData(res){
    let data = JSON.stringify(res);
    localStorage.setItem('aceitUser',data);
  }

  getUserData(){
    return JSON.parse(localStorage.getItem('aceitUser'));
  }

  logoutUser(){
    localStorage.clear('aceitUser');
    this.$state.go('loginView.login');
  }
}

StateChangeService.$inject = ['$transitions','$state'];
export default StateChangeService;
