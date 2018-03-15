
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
    this.gameNumber = this.gameNumber; 

    }

  $onInit(){
    this.getUserData();
    this.playedFirstVideo = false;
    this.gameNumber = 0; 

    window.gameEnded = function(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
  
    
          alert('duration = ' + duration);
          alert('noOfMoves = ' + noOfMoves);
          alert('instructionsClickCount = ' + instructionsClickCount);
          alert('win = ' + win);
          alert('firstMoveTime = ' + firstMoveTime);

          this.gameNumber ++;

        }.bind(this);

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

    angular.element(document).ready(()=>{
      //moserace
      var  game1 = nogic1.initialize(document.getElementById('holder'), {language:'en', level:11});
      //mousetrap
      // var  game2 = nogic2.initialize(document.getElementById('holder1'), {language:'en', skipInstructions:'true'});
      // //parkinglot
      // var game = nogic3.initialize(document.getElementById('holder2'), {language:'en', level:5});
      // //tower
      // var game = nogic4.initialize(document.getElementById('holder3'), {language:'en', noOfRings:4});
  
    });

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
    this.gameNumber++;
  }
  
  test2() {
    let c = document.getElementById('holder')
    let p = c.parentElement;
    p.replaceChild(c.cloneNode(true), c);
    nogic1.initialize(document.getElementById('holder'), {language:'en', level:1});

  }

  gamesEnded(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {

    console.log("$$$$$$$$$$$$$$$$$$$$")
    alert('duration = ' + duration);
    alert('noOfMoves = ' + noOfMoves);
    alert('instructionsClickCount = ' + instructionsClickCount);
    alert('win = ' + win);
    alert('firstMoveTime = ' + firstMoveTime);
  }


}
// window.gameEnded = function(){console.log('GAME ENDED. Arguments:', arguments);}



// window.getGameResult = function() {
//       var result = game.sendMessage('getGameResult');
      
//       result = JSON.parse(result);
      
//       alert('duration = ' + result.duration);
//       alert('noOfMoves = ' + result.noOfMoves);
//       alert('instructionsClickCount = ' + result.instructionsClickCount);
//       alert('win = ' + result.win);
//       alert('firstMoveTime = ' + result.firstMoveTime);
//     }

export default GamesController;
