class RoutineController {
  constructor(connection,$document) {
    this.name = 'routine';
    this.connection = connection;
    this.$document = $document;
  }

  $onInit(){
    this._saveStateComplete();
    angular.element(document).ready(()=> {
      this._startLionVideo();
    })
  }

  _startLionVideo(){
    let doc = angular.element(this.$document)[0].body;
    let lionSectionY = this.$document[0].getElementById('lion-section-id').offsetTop;
    this.$document.bind("scroll",()=> {
      if((doc.scrollTop-lionSectionY) > -300 && (doc.scrollTop-lionSectionY) < 300){
        document.getElementById('lol-lion').play();
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
