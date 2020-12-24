class RoutineController {
  constructor(connection, $document, $window) {
    this.name = 'routine';
    this.connection = connection;
    this.$document = $document;
    this.$window = $window;
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
    let document = this.$document[0];
    let lionSectionY = document.getElementById('lion-section-id').offsetTop;
    let doc = document.scrollingElement;

    this.$document.bind("scroll",()=> {
      const m = {
        "d": [-250, 300],
        "m": [40, 150]
      }
      let x = m['d'];

      if (this.$window.innerHeight < 600) {
        x = m['m'];
      }
      
      if(this.user && !_.get(this.user,'lolLionWatched') && (doc.scrollTop-lionSectionY) > x[0] && (doc.scrollTop-lionSectionY) < x[1]){
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

RoutineController.$inject = ['connection','$document', '$window'];
export default RoutineController;
