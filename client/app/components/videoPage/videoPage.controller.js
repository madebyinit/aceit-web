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
    angular.element(document).ready(()=>{
    });
    let t1 = false;
    // let changePage = this.$state.go('home');
   
    var myVideo = this.$document[0].getElementById('video0');
    if (myVideo.requestFullscreen) {
      myVideo.requestFullscreen();
      document.addEventListener('fullscreenchange',this.CheckChangeScreen.bind(this));
    } else if (myVideo.mozRequestFullScreen) {
      myVideo.mozRequestFullScreen();
      console.log("test")
      document.addEventListener('mozfullscreenchange',this.CheckChangeScreen.bind(this));
    } else if (myVideo.webkitRequestFullscreen) {
     myVideo.webkitRequestFullscreen();
     document.addEventListener('webkitfullscreenchange',this.CheckChangeScreen.bind(this));
    }

  }

  CheckChangeScreen(){
    if(this.firstStart > 0){
      this.$state.go('games');
    }
    this.firstStart++
  }


  ClickAfterEndVideo(){

    var myVideo = this.$document[0].getElementById('video0');
    
    if (myVideo.ended == true){
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
