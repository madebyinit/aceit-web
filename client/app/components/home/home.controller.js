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
    angular.element(document).ready(()=>{
      this._scroll();
    });
  }

  getUserData(){
    this.connection.getUserPromise().then((res)=>{
      this.user = res;
      this._userInit();
    })
  }

  saveWord(name){
    this.connection.saveData(name,'name').then((res)=>{
      this._closeWelcomeDialog();
      this.getUserData();
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
    this.showWelcomeDialog = false;
  }

  _showWelcomeDialog(){
    this.showWelcomeDialog = true;
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
          document.getElementsByTagName('body')[0].style.overflow = 'hidden';
          myVideo.play();
          that.$timeout(()=>{
            this.$document.unbind('scroll');
            that.showLionVideo = false;
            document.getElementsByTagName('body')[0].style.overflow = '';
          },4800)
        },0);
      }
    });
  }

}
HomeController.$inject = ['$translate','$document','$timeout','connection'];
export default HomeController;
