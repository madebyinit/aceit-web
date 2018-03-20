class VideoPageController {
  constructor($translate,$document,$timeout,$state,connection) {
    'ngInject';
    this.$translate = $translate;
    this.$document = $document;
    this.$timeout = $timeout;
    this.$state = $state;
    this.connection = connection;
    this.firstStart = 0;
  }

  $onInit(){
    this.getUserData();
    this.playedFirstVideo = false;
    // let changePage = this.$state.go('home');
    var myVideo = this.$document[0].getElementById('video0');

    let requestFull, eventName;
    switch(true){
      case myVideo.requestFullscreen !== undefined:
      [requestFull, eventName] = [myVideo.requestFullscreen, 'fullscreenchange'];
      break;

      case myVideo.mozRequestFullScreen !== undefined:
      [requestFull, eventName] = [myVideo.mozRequestFullScreen, 'mozfullscreenchange'];
      break;

      case myVideo.webkitRequestFullscreen !== undefined:
      [requestFull, eventName] = [myVideo.webkitRequestFullscreen, 'webkitfullscreenchange'];
      break;
    }
    requestFull.call(myVideo);
    document.addEventListener(eventName, this.CheckChangeScreen.bind(this));
    
  }

  CheckChangeScreen(){
    if(this.firstStart > 0){
      this.firstStart = -1;
      this.$state.go('games');
    }
    this.firstStart++
  }


  ClickAfterEndVideo(){

    var myVideo = this.$document[0].getElementById('video0');
    
    if (myVideo.ended == true){
      this.firstStart = -1;
      this.$state.go('games');
    }
  }

  $onDestroy(){
    this.$document.unbind('scroll');
  }

  getUserData(){
    this.connection.getData().then((res)=>{
      this.$timeout(()=>{
        this.user = res;
        this._userInit();
      },0);
    })
  }

  _userInit(){
    if(_.get(this.user,'name')){
      this.$timeout(()=>{
        this.userTitle = this.$translate.instant('home.you_getting_ready',{user:_.get(this.user,'name')});
      },0);
    }else{
      this.$timeout(()=>{
      },0);
    }
  }

  stateChange(state){
    this.$state.go(state);
  }
}
export default VideoPageController;
