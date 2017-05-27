import firebase from 'firebase';

class StateChangeService {
  constructor($transitions,$state,$location) {
    this.$transitions = $transitions;
    this.$state = $state;
    this.$location = $location;
    this.firebase = firebase;
  }

  stateChange(){
    this.$transitions.onSuccess({ to: true, from: true },(data)=>{
      this._checkUserLogin(data);
      this._segmentTrack();
      window.Intercom("update");
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
    this._intercomBoot(user);
    if(_.isEmpty(_.get(user,'uid'))){
      this.$state.go('loginView.login');
    }else{
      if(window.location.hostname.indexOf('localhost') === -1){
        this._userFs(user);
      }
    }
  }

  _intercomBoot(user){
    let time = + new Date();
    window.Intercom("boot", {
      app_id: "dy8do0p0",
      name: _.get(user,'email'),
      email: _.get(user,'email'),
      created_at: time
    });
  }

  _userFs(user){
    FS.identify(_.get(user,'uid'), {
      displayName: _.get(user,'email'),
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
      if(this.$state.current.name !== 'loginView.login' && this.$state.current.name !== 'loginView.forgotPassword'){
        this.$state.go('loginView.login');
      }
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
    this.firebase.auth().signOut().then((res)=> {
      this.$state.go('loginView.login');
    }).catch((error)=> {
      console.log(error);
    });
  }
}

StateChangeService.$inject = ['$transitions','$state','$location'];
export default StateChangeService;
