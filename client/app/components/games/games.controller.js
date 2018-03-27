
class GamesController {
  constructor($translate,$document,$state,connection, $interval,$scope,$window) {
    'ngInject';
    this.$translate = $translate;
    this.$document = $document;
    this.$state = $state;
    this.connection = connection;
    this.firstStart = 0;
    this.timeRemain = "00:00";
    this.seconds = 300;
    this.$interval = $interval;
    this.gameNumber = this.gameNumber; 
    this.showWindow = true;
    this.$scope = $scope;
    this.window = $window;
    this.startTimer = this.startTimer.bind(this);
    }

  $onInit(){
    this.gameNumber = 1; 

    angular.element(document).ready(()=>{
      // this.createGame(nogic, {language:'en', level:5})
      nogic.initialize(document.getElementById('main-game-wrapper'), {language:'en', level:5});
    });
    this.getUserData();

    window.gameEnded = function(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
  
          // alert('duration = ' + duration);
          // alert('noOfMoves = ' + noOfMoves);
          // alert('instructionsClickCount = ' + instructionsClickCount);
          // alert('win = ' + win);
          // alert('firstMoveTime = ' + firstMoveTime);

          this.gameNumber ++;

          switch (this.gameNumber) {
            //tower
            case 2:  this.createGame(nogic2, {language:'en', noOfRings:4}); break;
            //mousetrap
            case 3: this.createGame(nogic3, {language:'en', skipInstructions:'true'}); break;
            //moserace
            case 4: this.createGame(nogic4, {language: 'en', level: 1}); break;
            //parkinglot
            case 5: this.createGame(nogic, {language:'en', level:6});  break;
            case 6: this.stateChange('summary'); break;
        }

        }.bind(this);
  }

  $onDestroy(){
    this.removeListeners();
  }

  closeModal(val){
    const audio = document.getElementById("backgroundMusic"); 
    audio.play(); 
    this.showWindow = !this.showWindow;
    this.countdownTimer = this.$interval(this.startTimer, 1000);
  }

  startTimer(){
    var minutes = Math.round((this.seconds - 30) / 60);
    var remainingSeconds = this.seconds % 60;

    if (remainingSeconds < 10){
      remainingSeconds = "0" + remainingSeconds;
    }

    this.timeRemain = minutes + ":" + remainingSeconds;

    if(this.seconds == 0){
      this.$interval.cancel(this.countdownTimer);
      this.timeRemain = "00:00";
      this.showDialogEnd = true;
    }else{
      this.seconds --;
    }
   }

   skipGame(){
    this.gameNumber ++;

    switch (this.gameNumber) {
      //tower
      case 2:  this.createGame(nogic2, {language:'en', noOfRings:4}); break;
      //mousetrap
      case 3: this.createGame(nogic3, {language:'en', skipInstructions:'true'}); break;
      //moserace
      case 4: this.createGame(nogic4, {language: 'en', level: 1}); break;
      //parkinglot
      case 5: this.createGame(nogic, {language:'en', level:6});  break;

      case 6: if (this.seconds > 180){
        this.showDialog = true;
        this.gameNumber --;
      }else{this.stateChange('summary');}
      break;
  }
   }

   restartMosetrap(){
    this.createGame(nogic3, {language:'en', skipInstructions:'true'});
   }

  getUserData(){
    this.connection.getData().then((res)=>{
      this.user = res;
      this._userInit();
    });
  }

  _userInit(){
    if(this.user.name){
      this.userTitle = this.$translate.instant('home.you_getting_ready',{user:this.user.name});
      this.$scope.$apply();
    }
  }

  reloadPage(state){
    this.removeListeners();
    this.$state.reload();
  }

  removeListeners() {
    this.$interval.cancel(this.countdownTimer);
    this.showWindow = false;
    this.soundChange();
    const wrapper = document.getElementById('main-game-wrapper');
    const children = wrapper.childNodes;
    for (let i = 0; i < children.length; i++) {
      wrapper.removeChild(children[i]);      
    }
  }

  stateChange(state){
    this.removeListeners();
    this.$state.go(state);
  }

  soundChange(){
    const audio = document.getElementById("backgroundMusic"); 

    if(this.sound == true){
      audio.play(); 
    }else{
      audio.pause();
    }

    this.sound =  !this.sound;
  }
  
  createGame(initializer, options) {
    const wrapper = document.getElementById('main-game-wrapper');
    const children = wrapper.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (children[i].nodeType !== Node.ELEMENT_NODE) continue;
      wrapper.removeChild(children[i]);      
    }
    const holder = document.createElement('div');
    wrapper.appendChild(holder);
    initializer.initialize(holder, options);    
  }
  


}

export default GamesController;
