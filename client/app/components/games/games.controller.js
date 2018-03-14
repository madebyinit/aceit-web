
class GamesController {
  constructor($translate,$document,$timeout,$state,connection) {
    'ngInject';
    this.$translate = $translate;
    this.$document = $document;
    this.$timeout = $timeout;
    this.$state = $state;
    this.connection = connection;
    this.firstStart = 0;
    this.$mdDialog = "";

  
  }

  $onInit(){
    this.getUserData();
    this.playedFirstVideo = false;
    angular.element(document).ready(()=>{
    //moserace
    // var game = nogic.initialize(document.getElementById('holder'), {language:'en', level:1});
    //mousetrap
    var game = nogic.initialize(document.getElementById('holder'), {language:'en', skipInstructions:'true'});
    //parkinglot
    // var game = nogic.initialize(document.getElementById('holder'), {language:'en', level:5});
    //tower
    // var game = nogic.initialize(document.getElementById('holder'), {language:'en', noOfRings:4});

  console.log(game)
  function getGameResult() {
    var result = game.sendMessage('getGameResult');
    
    result = JSON.parse(result);
    
    alert('duration = ' + result.duration);
    alert('noOfMoves = ' + result.noOfMoves);
    alert('instructionsClickCount = ' + result.instructionsClickCount);
    alert('win = ' + result.win);
    alert('firstMoveTime = ' + result.firstMoveTime);
  }

  function gameEnded(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
    alert('duration = ' + duration);
    alert('noOfMoves = ' + noOfMoves);
    alert('instructionsClickCount = ' + instructionsClickCount);
    alert('win = ' + win);
    alert('firstMoveTime = ' + firstMoveTime);
  }



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
    
  // getGameResult() {
  //   var result = game.sendMessage('getGameResult');
    
  //   result = JSON.parse(result);
    
  //   alert('duration = ' + result.duration);
  //   alert('noOfMoves = ' + result.noOfMoves);
  //   alert('instructionsClickCount = ' + result.instructionsClickCount);
  //   alert('win = ' + result.win);
  //   alert('firstMoveTime = ' + result.firstMoveTime);
  // }
  
  // gameEnded(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
  //   alert('duration = ' + duration);
  //   alert('noOfMoves = ' + noOfMoves);
  //   alert('instructionsClickCount = ' + instructionsClickCount);
  //   alert('win = ' + win);
  //   alert('firstMoveTime = ' + firstMoveTime);
  // }
}

export default GamesController;
