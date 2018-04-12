class GamesController {
  constructor($translate,$state,connection, $interval,$scope,$window, gamesService, parkingLotService, towerService,  mouseGameService,  mazeraceService,  skipService, gameScoreValue,orderOfGames,helperService) {
    this.$translate = $translate;
    this.$state = $state;
    this.connection = connection;
    this.firstStart = false; 
    this.timeRemain = "00:00";
    this.seconds = 300;
    this.secondsleft = 0;
    this.gameSecSum = 0; 
    this.$interval = $interval;
    this.gameNumber = this.gameNumber; 
    this.showWindow = true;
    this.$scope = $scope;
    this.startTimer = this.startTimer.bind(this);
    this.mousewin = true;
    this.result = [];
    this.gameSuccComp = 0;
    this.gamesService = gamesService;
    this.parkingLotService = parkingLotService;
    this.towerService = towerService;
    this.mouseGameService = mouseGameService;
    this.mazeraceService = mazeraceService;
    this.gameScoreValue = gameScoreValue;
    this.skipService = skipService;
    this.orderOfGames = orderOfGames;
    this.helperService = helperService;
    this.gameBeforeLastTime = 0;
    this.gameBefore = '' ;
    this.showMouseRetry = true;
  }

  $onInit(){
    console.log(this.orderOfGames);

    this.gameNumber = 1; 
    angular.element(document).ready(()=>{
      nogic.initialize(document.getElementById('main-game-wrapper'), {language:'en', level:this.orderOfGames.level[0]});
    });

    console.log(this.orderOfGames.gameSequence);
    console.log(this.orderOfGames.level);
    console.log(localStorage.getItem('gamePage'));

    if(localStorage.getItem('gamePage') == null){
      console.log("FIRST START");
      this.firstStart = false;
      this.helperService.gameSequence();
      this.helperService.Results();
      
    }else{
      console.log("SECOND START");
      this.firstStart = true;
    }

    window.gameEnded = function(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
          this.gameSecSum = (300 - this.seconds);

          if (win == true){this.gameSuccComp ++};
                    
          // alert('duration = ' + duration);
          // alert('noOfMoves = ' + noOfMoves);
          // alert('instructionsClickCount = ' + instructionsClickCount);
          // alert('win = ' + win);
          // alert('firstMoveTime = ' + firstMoveTime);

          alert( 'duration = '+duration+' '+'firstMoveTime = '+firstMoveTime+' '+'noOfMoves = '+noOfMoves+' '+'instructionsClickCount = '+instructionsClickCount+' '+ 'win = ' + win + ' ')

          if (this.orderOfGames.gameSequence[this.gameNumber-1] == 'mousetrap'){this.mousewin = win,  this.showMouseRetry = win};

          if (this.orderOfGames.gameSequence[this.gameNumber-1] == 'mousetrap' && this.mousewin == false){
          }else{
            this.showMouseRetry = true;
                switch(this.gameNumber) {
                  case 1: this.parkingLotService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime); break;
                  case 2: this.towerService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime); break;
                  case 3: this.mouseGameService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime); break;
                  case 4: this.mazeraceService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime); break;
                  case 5: this.parkingLotService.endLastGame(duration, noOfMoves, instructionsClickCount, win, firstMoveTime); break;
                }

                this.gameNumber ++;

                switch (this.gameNumber) {
                  //tower
                  case 2:  
                  nogic.uninitialize();
                  if (this.orderOfGames.gameSequence[1] == "tower"){
                    this.gameBefore="tower"; 
                    this.createGame(nogic2, {language:'en', noOfRings:this.orderOfGames.level[1]})};

                  if (this.orderOfGames.gameSequence[1] == "mousetrap"){
                    this.gameBefore="mousetrap";
                    this.createGame(nogic3, {language:'en', skipInstructions:'false'})};

                  if (this.orderOfGames.gameSequence[1] == "mazerace"){
                    this.gameBefore="mazerace";
                    this.createGame(nogic4, {language: 'en', level: this.orderOfGames.level[1]})};
                  break;

                  //mousetrap
                  case 3: 
                  switch(this.orderOfGames.gameSequence[1]) {
                    case 1: nogic2.uninitialize(); break;
                    case 2: nogic3.uninitialize(); break;
                    case 3: nogic4.uninitialize(); break;
                  }

                  if (this.orderOfGames.gameSequence[2] == "tower"){
                    this.gameBefore="tower"; 
                    this.createGame(nogic2, {language:'en', noOfRings:this.orderOfGames.level[2]})
                  };

                  if (this.orderOfGames.gameSequence[2] == "mousetrap"){
                    this.gameBefore="mousetrap";
                    this.createGame(nogic3, {language:'en', skipInstructions:'false'})};

                  if (this.orderOfGames.gameSequence[2] == "mazerace"){
                    this.gameBefore="mazerace";
                    this.createGame(nogic4, {language: 'en', level: this.orderOfGames.level[2]})};
                  break;
                  //moserace
                  case 4: 
                  switch(this.orderOfGames.gameSequence[2]) {
                    case 1: nogic2.uninitialize(); break;
                    case 2: nogic3.uninitialize(); break;
                    case 3: nogic4.uninitialize(); break;
                  }

                  if (this.orderOfGames.gameSequence[3] == "tower"){
                    this.gameBefore="tower"; 
                    this.createGame(nogic2, {language:'en', noOfRings:this.orderOfGames.level[3]})
                  };

                  if (this.orderOfGames.gameSequence[3] == "mousetrap"){
                    this.gameBefore="mousetrap";
                    this.createGame(nogic3, {language:'en', skipInstructions:'false'})};

                  if (this.orderOfGames.gameSequence[3] == "mazerace"){
                    this.gameBefore="mazerace";
                    this.createGame(nogic4, {language: 'en', level: this.orderOfGames.level[3]})};
                  
                  this.secondsleft = 300 - this.seconds - this.gameSecSum;
                  this.gameSecSum += this.secondsleft; 
                  this.gameBeforeLastTime = this.secondsleft;
                  break;
                  //parkinglot
                  case 5: 
                  switch(this.orderOfGames.gameSequence[3]) {
                    case 1: nogic2.uninitialize(); break;
                    case 2: nogic3.uninitialize(); break;
                    case 3: nogic4.uninitialize(); break;
                  }
                  this.createGame(nogic, {language:'en', level:this.orderOfGames.level[4]});  break;

                  case 6: 
                  nogic.uninitialize();
                  this.gamesService.gameStatistic();
                  this.stateChange('home'); localStorage.setItem('gamePage', location.pathname); break;
                }
              }

        }.bind(this);
  }

  $onDestroy(){
    this.removeListeners();
  }

  clearStorage(){
    localStorage.removeItem('gamePage');
    this.firstStart = false;
  }

  closeModal(val){
    const audio = document.getElementById("backgroundMusic"); 
    audio.play(); 
    this.gameScoreValue.selfAssessment=val;
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
      console.log("END TIME",this.gameNumber );
 
      switch (this.gameNumber){
        case 1:
          console.log("END TIME 1 GAME");
          this.gamesService.EndTimeInGame("Game 1");
        break;
        case 2:
          console.log("END TIME 2 GAME");
          this.gamesService.EndTimeInGame("Game 2");
        break;
        case 3:
          console.log("END TIME 3 GAME");
          this.gamesService.EndTimeInGame("Game 3");
        break;
        case 5:
          console.log("END TIME 5 GAME", this.gameSecSum);
          this.gamesService.EndTimeInLastGame(this.gameSecSum);
        break;
      }

      this.showDialogEnd = true;
    }else{
      this.seconds --;
    }
   }

  skipGame(){

    switch (this.gameNumber) {
      case 1:
      this.secondsleft = 300 - this.seconds;
      this.gameSecSum += this.secondsleft;

      this.skipService.GameSkip(this.secondsleft,this.orderOfGames.gameSequence[0]);
      break;
      case 2:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum +=this.secondsleft; 

        this.skipService.GameSkip(this.secondsleft,this.orderOfGames.gameSequence[1]);
      break;
      case 3:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum +=this.secondsleft; 

        this.skipService.GameSkip(this.secondsleft,this.orderOfGames.gameSequence[2]);
      break;
      case 4:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum +=this.secondsleft; 
        this.gameBeforeLastTime = this.secondsleft;

        this.skipService.GameSkip(this.secondsleft,this.orderOfGames.gameSequence[3]);
      break;
      case 5:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum +=this.secondsleft;
      break;
    }

    this.gameNumber ++;
    switch (this.gameNumber) {
      //tower
      case 2:  
      nogic.uninitialize();

      if (this.orderOfGames.gameSequence[1] == "tower"){
        this.gameBefore="tower"; 
        this.createGame(nogic2, {language:'en', noOfRings:4})};

      if (this.orderOfGames.gameSequence[1] == "mousetrap"){
        this.gameBefore="mousetrap";
        this.createGame(nogic3, {language:'en', skipInstructions:'false'})};

      if (this.orderOfGames.gameSequence[1] == "mazerace"){
        this.gameBefore="mazerace";
        this.createGame(nogic4, {language: 'en', level: 2})};
      break;
      //mousetrap
      case 3: 
      switch(this.orderOfGames.gameSequence[1]) {
        case 1: nogic2.uninitialize(); break;
        case 2: nogic3.uninitialize(); break;
        case 3: nogic4.uninitialize(); break;
      }
      this.showMouseRetry = true;
      if (this.orderOfGames.gameSequence[2] == "tower"){
        this.gameBefore="tower"; 
        this.createGame(nogic2, {language:'en', noOfRings:4})
      };

      if (this.orderOfGames.gameSequence[2] == "mousetrap"){
        this.gameBefore="mousetrap";
        this.createGame(nogic3, {language:'en', skipInstructions:'false'})};

      if (this.orderOfGames.gameSequence[2] == "mazerace"){
        this.gameBefore="mazerace";
        this.createGame(nogic4, {language: 'en', level: 2})};
      break;
      //moserace
      case 4: 
      switch(this.orderOfGames.gameSequence[2]) {
        case 1: nogic2.uninitialize(); break;
        case 2: nogic3.uninitialize(); break;
        case 3: nogic4.uninitialize(); break;
      }
      this.showMouseRetry = true;
      if (this.orderOfGames.gameSequence[3] == "tower"){
        this.gameBefore="tower"; 
        this.createGame(nogic2, {language:'en', noOfRings:4})
      };

      if (this.orderOfGames.gameSequence[3] == "mousetrap"){
        this.gameBefore="mousetrap";
        this.createGame(nogic3, {language:'en', skipInstructions:'false'})};

      if (this.orderOfGames.gameSequence[3] == "mazerace"){
        this.gameBefore="mazerace";
        this.createGame(nogic4, {language: 'en', level: 2})};
      break;
      //parkinglot
      case 5:
      if (this.seconds > 180){ this.showDialog = true; this.gameNumber = 5; }   
      this.showMouseRetry = true;

      switch(this.orderOfGames.gameSequence[3]) {
        case 1: nogic2.uninitialize(); break;
        case 2: nogic3.uninitialize(); break;
        case 3: nogic4.uninitialize(); break;
      }

      this.createGame(nogic, {language:'en', level:3});  break;
      case 6: 
      nogic.uninitialize();
      this.gamesService.gameStatistic();
      this.stateChange('home'); 
      break;
    }

  }

   restartMosetrap(){
    nogic3.uninitialize();
    this.createGame(nogic3, {language:'en', skipInstructions:'true'});
   }

   reloadPage(state){
    localStorage.setItem('gamePage', location.pathname);
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
    localStorage.setItem('gamePage', location.pathname);
    this.removeListeners();
    this.$state.go(state);
  }

  soundChange(){
    const audio = document.getElementById("backgroundMusic"); 
    if(this.sound == true){
      audio.play(); 
      this.gameScoreValue.muteMusic= 0;
    }else{
      audio.pause();
      this.gameScoreValue.muteMusic= 1;
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

GamesController.$inject = ['$translate', '$state', 'connection', '$interval', '$scope', '$window', 'gamesService', 'parkingLotService', 'towerService',  'mouseGameService',  'mazeraceService',  'skipService', 'gameScoreValue','orderOfGames','helperService'];
export default GamesController;
