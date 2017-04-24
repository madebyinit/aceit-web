class HomeController {
  constructor($translate,firebaseService,$document,$timeout) {
    this.$translate = $translate;
    this.$document = $document;
    this.user = firebaseService.getUser();
    this.$timeout = $timeout;
    this.userTitle = this.$translate.instant('home.you_getting_ready',{user:this.user.displayName});
  }

  $onInit(){
    this.showLionVideo = false;
    angular.element(document).ready(()=>{
      this._scroll();
    });
  }

  _scroll(){
    let that = this;
    let lionSectionY = this.$document[0].getElementById('lion-section-view').offsetTop;
    let myVideo = this.$document[0].getElementById('video1');
    let doc = angular.element(this.$document)[0].body;
    this.$document.bind("scroll",()=> {
      if((doc.scrollTop-lionSectionY) > -100 && (doc.scrollTop-lionSectionY) < 100){
        that.$timeout(()=>{
          that.showLionVideo = true;
          myVideo.play();
          that.$timeout(()=>{
            this.$document.unbind('scroll');
            that.showLionVideo = false;
          },4500)
        },0);
      }
    });
  }

}
HomeController.$inject = ['$translate','firebaseService','$document','$timeout'];
export default HomeController;
