
class GamesController {
  constructor($translate,$document,$timeout,$state,connection, $interval) {
    'ngInject';
    this.$translate = $translate;
    this.$document = $document;
    this.$timeout = $timeout;
    this.$state = $state;
    this.connection = connection;
    this.firstStart = 0;
    this.$mdDialog = "";
    this.timeRemain = "0:00";
    this.seconds = 300;
    this.$interval = $interval;
    }

  $onInit(){
    this.getUserData();
    this.playedFirstVideo = false;

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/mousetrap/js/mousetrap.js";
    document.body.appendChild(script);

    // // <script src="/mazerace/js/mazerace.js"></script>
    // // <script src="/mousetrap/js/mousetrap.js"></script> 

    // angular.element(document).ready(()=>{
    // //moserace
    // var game = nogic.initialize(document.getElementById('holder'), {language:'en', level:1});

    // //mousetrap
    // // var game = nogic.initialize(document.getElementById('holder'), {language:'en', skipInstructions:'true'});
    // //parkinglot
    // // var game = nogic.initialize(document.getElementById('holder'), {language:'en', level:5});
    // //tower
    // // var game = nogic.initialize(document.getElementById('holder'), {language:'en', noOfRings:4});

    // // console.log(game)
    // // function getGameResult() {
    // //   var result = game.sendMessage('getGameResult');
      
    // //   result = JSON.parse(result);
      
    // //   alert('duration = ' + result.duration);
    // //   alert('noOfMoves = ' + result.noOfMoves);
    // //   alert('instructionsClickCount = ' + result.instructionsClickCount);
    // //   alert('win = ' + result.win);
    // //   alert('firstMoveTime = ' + result.firstMoveTime);
    // // }

    // // function gameEnded(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
    // //   alert('duration = ' + duration);
    // //   alert('noOfMoves = ' + noOfMoves);
    // //   alert('instructionsClickCount = ' + instructionsClickCount);
    // //   alert('win = ' + win);
    // //   alert('firstMoveTime = ' + firstMoveTime);
    // // }

    // });

    function startTimer(){
      var minutes = Math.round((this.seconds - 30) / 60);
      var remainingSeconds = this.seconds % 60;

      if (remainingSeconds < 10){
        remainingSeconds = "0" + remainingSeconds;
      }

      this.timeRemain = minutes + ":" + remainingSeconds;

      if(this.seconds == 0){
        this.$interval.cancel(countdownTimer);
        this.timeRemain = "00:00"
      }else{
        this.seconds --;
      }
    }

    var countdownTimer = this.$interval(startTimer.bind(this),1000);

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

  reloadPage(state){
    this.$state.reload(state);
  }

  stateChange(state){
    this.$state.go(state);
  }

  soundChange(){
  this.sound =  !this.sound;
  }
    
  getGameResult() {
    var result = game.sendMessage('getGameResult');
    
    result = JSON.parse(result);
    
    alert('duration = ' + result.duration);
    alert('noOfMoves = ' + result.noOfMoves);
    alert('instructionsClickCount = ' + result.instructionsClickCount);
    alert('win = ' + result.win);
    alert('firstMoveTime = ' + result.firstMoveTime);
  }
  
  gameEnded(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
    alert('duration = ' + duration);
    alert('noOfMoves = ' + noOfMoves);
    alert('instructionsClickCount = ' + instructionsClickCount);
    alert('win = ' + win);
    alert('firstMoveTime = ' + firstMoveTime);
  }

  test(){
    console.log("!!!!!!!!!!!!!!!!!!!!!!!")
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/mazerace/js/mazerace.js";
    document.body.appendChild(script);

    angular.element(document).ready(()=>{
      //moserace
    var  game = nogic.initialize(document.getElementById('holder1'), {language:'en', level:1});
      //mousetrap
      // var game = nogic.initialize(document.getElementById('holder'), {language:'en', skipInstructions:'true'});
      //parkinglot
      // var game = nogic.initialize(document.getElementById('holder'), {language:'en', level:5});
      //tower
      // var game = nogic.initialize(document.getElementById('holder'), {language:'en', noOfRings:4});
  
    });
  }

  test2(){
    console.log("!!!!!!!!!!!!!!!!!!!!!!!")
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/mousetrap/js/mousetrap.js";
    document.body.appendChild(script);

    angular.element(document).ready(()=>{
      //moserace
    var  game = nogic.initialize(document.getElementById('holder'), {language:'en', level:1});
      //mousetrap
      // var game = nogic.initialize(document.getElementById('holder'), {language:'en', skipInstructions:'true'});
      //parkinglot
      // var game = nogic.initialize(document.getElementById('holder'), {language:'en', level:5});
      //tower
      // var game = nogic.initialize(document.getElementById('holder'), {language:'en', noOfRings:4});
  
    });
  }

}

export default GamesController;
