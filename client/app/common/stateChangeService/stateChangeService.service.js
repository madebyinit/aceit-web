class StateChangeService {
  constructor($transitions,$state,$location) {
    this.$transitions = $transitions;
    this.$state = $state;
    this.$location = $location;
  }

  stateChange(){
    this.$transitions.onSuccess({ to: true, from: true },(data)=>{
      this._checkUserLogin(data);
      this._segmentTrack();
    });
  }

  _segmentTrack(){
    let user = this.getUserData();
    analytics.page({
      path: this.$location.path(),
      url: this.$location.absUrl()
    });
    analytics.identify(_.get(user,'uid'), {
      email: _.get(user,'email')
    });
  }

  appInit(){
    let user = this.getUserData();
    if(_.isEmpty(_.get(user,'uid'))){
      this.$state.go('loginView.login');
    }else{
      if(window.location.hostname.indexOf('localhost') === -1){
        this._userFs(user);
      }
    }
  }

  _userFs(user){
    FS.identify(_.get(user,'uid'), {
      email:_.get(user,'email'),
    });
    Rollbar.configure({
      payload: {
        person: {
          id: _.get(user,'uid'),
          email:_.get(user,'email')
        }
      }
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

StateChangeService.$inject = ['$transitions','$state','$location'];
export default StateChangeService;
