class HomeController {
  constructor($translate,$document,$timeout,connection) {
    this.$translate = $translate;
    this.$document = $document;
    this.$timeout = $timeout;
    this.connection = connection;
  }

  $onInit(){
    this.getUserData();
    this.showLionVideo = false;
    this.playedLionVideo = false;
    this.playedFirstVideo = false;
    angular.element(document).ready(()=>{
      this._scroll();
    });
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

  saveWord(name){
    this.connection.saveData(name,'name').then((res)=>{
      this.getUserData();
      this._closeWelcomeDialog();
    },(error)=>{
      console.log(error);
    })
  }

  _userInit(){
    if(_.get(this.user,'name')){
      this.$timeout(()=>{
        this.userTitle = this.$translate.instant('home.you_getting_ready',{user:_.get(this.user,'name')});
      },0);
    }else{
      this.$timeout(()=>{
        this._showWelcomeDialog();
      },0);
    }
  }

  _closeWelcomeDialog(){
    this.$timeout(()=>{
      this.showWelcomeDialog = false;
    },0)
  }

  _showWelcomeDialog(){
    this.$timeout(()=>{
      this.showWelcomeDialog = true;
    },0)
  }

  _scroll(){
    // let doc = angular.element(this.$document)[0].body;
    let doc = document.scrollingElement;
    this.$document.bind("scroll",()=> {
      this._firstVideo(doc);
      this._lionVideoPlay(doc);
    });
  }

  _firstVideo(doc){
    let videoY = this.$document[0].getElementById('first-video').offsetTop;
    let myVideo = this.$document[0].getElementById('video0');
    if(!_.get(this.user,'firstVideoWatched') && !this.playedFirstVideo && ((doc.scrollTop-videoY) > -100 && (doc.scrollTop-videoY) < 100)){
      myVideo.play();
      this.playedFirstVideo = true;
      this.connection.saveData(true,'firstVideoWatched');
    }
  }

  _lionVideoPlay(doc){
    let lionSectionY = this.$document[0].getElementById('lion-section-view').offsetTop;
    let myVideo = this.$document[0].getElementById('video1');
    if(!_.get(this.user,'firstLionWatched') && ((doc.scrollTop-lionSectionY) > -100 && (doc.scrollTop-lionSectionY) < 100)){
      this.$timeout(()=>{
        this.showLionVideo = true;
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        myVideo.play();
        angular.element(myVideo).on('ended',()=>{
          this.$timeout(()=>{
            this.$document.unbind('scroll');
            this.showLionVideo = false;
            document.getElementsByTagName('body')[0].style.overflow = '';
          },0)
        });
        this.connection.saveData(true,'firstLionWatched');
      },0);
    }
  }

}
HomeController.$inject = ['$translate','$document','$timeout','connection'];
export default HomeController;
