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
  }

  _playVideo(){
    let doc = angular.element(this.$document)[0].body;
    let videoY = this.$document[0].getElementById('pos-video-start').offsetTop;
    let myVideo = this.$document[0].getElementById('pos-video');
    this.$document.bind("scroll",()=> {
      if(!_.get(this.user,'positiveWatched') && ((doc.scrollTop-videoY) > -100 && (doc.scrollTop-videoY) < 100)){
        myVideo.play();
        this.connection.saveData(true,'positiveWatched');
        this.$document.unbind('scroll');
      }
    });
  }

  _getUserData(){
    this.connection.getUserPromise().then((res)=>{
      this.user = res;
      if(_.get(res,'positiveComplete')){
        this.$timeout(()=>{
          this.positiveComplete = true;
        },0)
      }else{
        this._saveStateComplete();
      }
      angular.element(document).ready(()=>{
        this._playVideo();
      })
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
