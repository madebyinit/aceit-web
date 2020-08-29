class RoutineController {
  constructor(connection,$document) {
    this.name = 'routine';
    this.connection = connection;
    this.$document = $document;
  }

  $onInit(){
    angular.element(document).ready(()=> {
      this.connection.getUserPromise().then((res)=>{
        document.getElementById('lol-lion').volume = 0.5;
        this.user = res;
        this._startLionVideo();
      });
    });
    this._saveStateComplete();
  }

  _startLionVideo(){
    // let doc = angular.element(this.$document)[0].body;
    let doc = document.scrollingElement;
    let lionSectionY = this.$document[0].getElementById('lion-section-id').offsetTop;
    this.$document.bind("scroll",()=> {
      if(this.user && !_.get(this.user,'lolLionWatched') && (doc.scrollTop-lionSectionY) > -250 && (doc.scrollTop-lionSectionY) < 300){
        document.getElementById('lol-lion').play();
        this.connection.saveData(true,'lolLionWatched');
        this.$document.unbind('scroll');
      }
    });
  }

  _saveStateComplete(){
    this.connection.saveData(true,'routineComplete');
  }
}

RoutineController.$inject = ['connection','$document'];
export default RoutineController;
