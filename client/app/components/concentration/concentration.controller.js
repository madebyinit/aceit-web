class ConcentrationController {
  constructor(connection,$timeout,$state,$document) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.$state = $state;
    this.$document = $document;
  }

  $onInit(){
    this._getWord();
  }

  _startVideo(){
    // let doc = angular.element(this.$document)[0].body;
    let doc = document.scrollingElement;
    let lionSectionY = this.$document[0].getElementById('target-id').offsetTop;
    this.$document.bind("scroll",()=> {
      if(!_.get(this.user,'concentrationWatched') && ((doc.scrollTop-lionSectionY) > -100 && (doc.scrollTop-lionSectionY) < 100)){
        document.getElementById('concentration-video-id').play();
        this.connection.saveData(true,'concentrationWatched');
        this.$document.unbind('scroll');
      }
    });
  }

  _getWord(){
    this.connection.getUserPromise().then((res)=>{
      this.user = res;
      this._startVideo();
      this._checkStateComplete();
      if(_.get(res,'concentration')){
        this.$timeout(()=>{
          this.concentrationWord = _.get(res,'concentration');
        },0);
      }
    })
  }

  _checkStateComplete(){
    if(_.get(this.user,'concentrationComplete')){
      this.$timeout(()=>{
        this.concentrationComplete = true;
      },0)
    }else{
      this._saveStateComplete();
    }
  }

  goToSummary(){
    this.$state.go('summary');
  }

  _saveStateComplete(){
    this.$timeout(()=>{
      this.concentrationComplete = true;
      this.connection.saveData(this.concentrationComplete,'concentrationComplete');
    },);
  }

  saveWord(val){
    this.concentrationWord = val;
    this.connection.saveData(val,'concentration').then((res)=>{
      this.showDialog = false;
      this._getWord();
    },(error)=>{
      console.log(error);
    })
  }
}

ConcentrationController.$inject = ['connection','$timeout','$state','$document'];
export default ConcentrationController;
