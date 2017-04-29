class StateChangeService {
  constructor($transitions,$state) {
    this.$transitions = $transitions;
    this.$state = $state;
  }

  stateChange(){
    this.$transitions.onSuccess({},(data)=>{
      this._checkUserLogin(data);
    });
  }

  _checkUserLogin(data){
    let user = this.getUserData();
    if(_.get(user,'uid')){
      this._userLastState(data);
    }else{
      this.$state.go('loginView.login');
    }
  }

  _userLastState(data){
    this.$state.go(_.get(data, 'router.globals.current.name'));
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
