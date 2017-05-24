class PositiveThinkingController {
  constructor(connection,$timeout,$state,$document) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.$state = $state;
    this.$document = $document;
  }

  $onInit(){
    this.positiveComplete = false;
    this._getUserData();
    angular.element(document).ready(()=>{
      this._playVideo();
    })
  }

  _playVideo(){
    let doc = angular.element(this.$document)[0].body;
    let videoY = this.$document[0].getElementById('pos-video-start').offsetTop;
    let myVideo = this.$document[0].getElementById('pos-video');
    this.$document.bind("scroll",()=> {
      if((doc.scrollTop-videoY) > -100 && (doc.scrollTop-videoY) < 100){
        myVideo.play();
        this.$document.unbind('scroll');
      }
    });
  }

  _getUserData(){
    this.connection.getUserPromise().then((res)=>{
      if(_.get(res,'positiveComplete')){
        this.$timeout(()=>{
          this.positiveComplete = true;
        },0)
      }else{
        this._saveStateComplete();
      }
    })
  }

  goToSummary(){
    this.$state.go('summary');
  }

  _saveStateComplete(){
    this.$timeout(()=> {
      this.positiveComplete = true;
      this.connection.saveData(this.positiveComplete,'positiveComplete');
    },0);
  }

  closeDialog(){
    this.showSticky = false;
  }
}

PositiveThinkingController.$inject = ['connection','$timeout','$state','$document'];
export default PositiveThinkingController;
