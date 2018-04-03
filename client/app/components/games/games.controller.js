
class GamesController {
  constructor($translate,$state,connection, $interval,$scope,$window, gamesService, parkingLotService, towerService,  mouseGameService,  mazeraceService,  skipService, gameScoreValue) {
    'ngInject';
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
  }

  $onInit(){
    this.gameNumber = 1; 
    console.log(this.gamesService);
    angular.element(document).ready(()=>{
      // this.createGame(nogic, {language:'en', level:5})
      nogic.initialize(document.getElementById('main-game-wrapper'), {language:'en', level:2});
    });
    // this.getUserData();
    
    if(localStorage.getItem('gamePage') == null){
      console.log("FIRST START");
      
    }else{
      console.log("SECOND START");
      this.firstStart = true;
    }

    localStorage.removeItem('lowConfidence');
    localStorage.removeItem('badTimeMan');
    localStorage.removeItem('perfectionism');
    localStorage.removeItem('negThink');
    localStorage.removeItem('lackRicuz');
    localStorage.removeItem('impulsivity');
    localStorage.removeItem('slowStarter');
    localStorage.removeItem('panic');
    localStorage.removeItem('frustration');
    localStorage.removeItem('muteMusic');

    window.gameEnded = function(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
          this.gameSecSum = (300 - this.seconds);

          if (win == true){this.gameSuccComp ++}
                    
          // alert('duration = ' + firstMoveTime);
          // alert('duration = ' + duration);
          // alert('noOfMoves = ' + noOfMoves);
          // alert('instructionsClickCount = ' + instructionsClickCount);
          // alert('win = ' + win);
          // alert('firstMoveTime = ' + firstMoveTime);

          if (this.gameNumber == 3){this.mousewin = win}

          if (this.gameNumber == 3 && this.mousewin == false){
          }else{
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
                  case 2:  this.createGame(nogic2, {language:'en', noOfRings:4}); break;
                  //mousetrap
                  case 3: this.createGame(nogic3, {language:'en', skipInstructions:'false'}); break;
                  //moserace
                  case 4: this.createGame(nogic4, {language: 'en', level: 2}); break;
                  //parkinglot
                  case 5: this.createGame(nogic, {language:'en', level:3});  break;

                  case 6: this.stateChange('home'); localStorage.setItem('gamePage', location.pathname); break;
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
    localStorage.setItem('guess',val); 
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

    switch (this.gameNumber) {
      case 1:
      this.secondsleft = 300 - this.seconds;
      this.gameSecSum += this.secondsleft;
      console.log(this.secondsleft,"!!!!!!!!!!!!!!");

      this.skipService.firstSkip(secondsleft);

        // if (this.secondsleft <= 30){ console.log("TEST");  this.result[0] = [10,10,0,10,10,10,10,10,0]; }
        // else if (this.secondsleft > 30 && this.secondsleft <= 40){ this.result[0] = [10,8,0,10,0,9,8,9,0]; }
        // else if (this.secondsleft > 40 && this.secondsleft <= 50){ this.result[0] = [9,6,0,9,0,8,4,8,0]; }
        // else if (this.secondsleft > 50 && this.secondsleft <= 60){ this.result[0] = [7,0,0,7,0,0,3,0,0]; }
        // else if (this.secondsleft > 60 && this.secondsleft <= 70){ this.result[0] = [5,2,0,5,0,0,4,0,0]; }
        // else if (this.secondsleft > 70 && this.secondsleft <= 80){ this.result[0] = [6,6,2,6,0,0,7,0,0]; }
        // else if (this.secondsleft > 80 && this.secondsleft <= 90){ this.result[0] = [7,9,5,7,0,0,9,0,0]; }
        // else if (this.secondsleft > 90 && this.secondsleft <= 100){ this.result[0] = [8,10,10,8,0,0,10,0,0]; }
        // else if (this.secondsleft > 100 && this.secondsleft <= 115){ this.result[0] = [10,10,10,10,0,0,10,0,0]; }
        // else if (this.secondsleft > 116){ this.result[0] = [0,0,0,0,0,10,0,0,0]; }
      
      console.log(this.result[0]) ;
      break;
      case 2:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum +=this.secondsleft; 
        console.log(this.secondsleft,"@@@@@@@@@@@@@@@");

        this.skipService.secondSkip(secondsleft);

        // if (this.secondsleft <= 30){  this.result[1] = [5,0,0,0,0,6,0,0,0]; }
        // else if (this.secondsleft > 30 && this.secondsleft <= 40){ this.result[1] = [4,0,0,0,0,2,0,0,0]; }
        // else if (this.secondsleft > 40 && this.secondsleft <= 50){ this.result[1] = [3,0,0,0,0,0,0,0,0]; }
        // else if (this.secondsleft > 50 && this.secondsleft <= 60){ this.result[1] = [0,0,0,0,0,0,0,0,0]; }
        // else if (this.secondsleft > 60 && this.secondsleft <= 70){ this.result[1] = [0,0,0,0,0,0,0,0,0]; }
        // else if (this.secondsleft > 70 && this.secondsleft <= 80){ this.result[1] = [0,2,2,0,0,0,0,0,0]; }
        // else if (this.secondsleft > 80 && this.secondsleft <= 90){ this.result[1] = [0,4,4,0,0,0,0,0,0]; }
        // else if (this.secondsleft > 90 && this.secondsleft <= 100){ this.result[1] = [0,8,8,0,0,0,0,0,0]; }
        // else if (this.secondsleft > 100 && this.secondsleft <= 115){ this.result[1] = [0,10,10,0,0,0,0,0,0]; }
        // else if (this.secondsleft > 116) { this.result[1] = [0,10,10,0,0,10,0,0,0]; }

        console.log(this.result[1]) ;
      break;
      case 3:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum +=this.secondsleft; console.log(this.secondsleft,"#############");


        this.skipService.thirdSkip(secondsleft);

          // if (this.secondsleft <= 30){  this.result[2] = [10,10,0,10,0,10,0,0,0]; }
          // else if (this.secondsleft > 30 && this.secondsleft <= 40){ this.result[2] = [8,6,0,8,0,8,0,0,0]; }
          // else if (this.secondsleft > 40 && this.secondsleft <= 90){ this.result[2] = [0,0,0,0,0,0,0,0,0]; }
          // else if (this.secondsleft > 90 && this.secondsleft <= 100){ this.result[2] = [0,3,1,0,0,0,0,0,0]; }
          // else if (this.secondsleft > 100 && this.secondsleft <= 115){ this.result[2] = [0,6,3,0,0,0,0,0,0]; }
          // else if (this.secondsleft > 116){ this.result[2] = [0,10,10,0,0,0,0,0,0]; }

        console.log(this.result[2]) ;
      break;
      case 4:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum +=this.secondsleft; console.log(this.secondsleft,"$$$$$$$$$$$");

        this.skipService.fourthSkip(secondsleft);

          // if (this.secondsleft <= 30){  this.result[3] = [10,10,0,10,10,10,0,10,0]; }
          // else if (this.secondsleft > 30 && this.secondsleft <= 40){ this.result[3] = [9,9,0,9,9,9,0,9,0]; }
          // else if (this.secondsleft > 40 && this.secondsleft <= 50){ this.result[3] = [8,7,0,8,8,0,0,8,0]; }
          // else if (this.secondsleft > 50 && this.secondsleft <= 60){ this.result[3] = [7,0,0,7,7,0,0,0,0]; }
          // else if (this.secondsleft > 60 && this.secondsleft <= 70){ this.result[3] = [6,0,0,6,6,0,0,0,0]; }
          // else if (this.secondsleft > 70 && this.secondsleft <= 80){ this.result[3] = [5,3,0,5,5,0,0,0,0]; }
          // else if (this.secondsleft > 80 && this.secondsleft <= 90){ this.result[3] = [7,7,3,4,4,0,0,0,0]; }
          // else if (this.secondsleft > 90 && this.secondsleft <= 100){ this.result[3] = [8,10,8,8,8,0,0,0,0]; }
          // else if (this.secondsleft > 100 && this.secondsleft <= 115){ this.result[3] = [10,10,9,10,10,0,0,0,0]; }
          // else if (this.secondsleft > 116){ this.result[3] = [10,10,10,10,10,0,0,0,0]; }

        console.log(this.result[3]) ;
      break;
      case 5:
      this.secondsleft = 300 - this.seconds - this.gameSecSum;
      this.gameSecSum +=this.secondsleft; console.log(this.secondsleft,"%%%%%%%%%%%%");
      break;
    }

    this.gameNumber ++;

    switch (this.gameNumber) {
      //tower
      case 2:  this.createGame(nogic2, {language:'en', noOfRings:4}); break;
      //mousetrap
      case 3: this.createGame(nogic3, {language:'en', skipInstructions:'true'}); break;
      //moserace
      case 4: this.createGame(nogic4, {language: 'en', level: 1}); break;
      //parkinglot
      case 5: if (this.seconds > 180){ this.showDialog = true; this.gameNumber = 5; }  
              this.createGame(nogic, {language:'en', level:6});  break;

      case 6: 
      let lowConfidence = 0;
      let badTimeMan = 0;
      let perfectionism = 0;
      let negThink = 0;
      let lackRicuz = 0;
      let impulsivity = 0;
      let slowStarter = 0;
      let panic = 0;
      let frustration = 0;

      for (let i = 0; i < this.result.length; i++) { 
      lowConfidence += this.result[i][0];
      badTimeMan += this.result[i][1];
      perfectionism += this.result[i][2];
      negThink += this.result[i][3];
      lackRicuz += this.result[i][4];
      impulsivity += this.result[i][5];
      slowStarter += this.result[i][6];
      panic += this.result[i][7];
      frustration += this.result[i][8];
    }
    localStorage.setItem('lowConfidence', lowConfidence);
    localStorage.setItem('badTimeMan', badTimeMan);
    localStorage.setItem('perfectionism', perfectionism);
    localStorage.setItem('negThink', negThink);
    localStorage.setItem('lackRicuz', lackRicuz);
    localStorage.setItem('impulsivity', impulsivity);
    localStorage.setItem('slowStarter', slowStarter);
    localStorage.setItem('panic', panic);
    localStorage.setItem('frustration', frustration);
    localStorage.setItem('gamePage', location.pathname);
    localStorage.setItem('gameSuccComp', this.gameSuccComp);

      this.stateChange('home'); 
      break;
  }
   }

   restartMosetrap(){
    this.createGame(nogic3, {language:'en', skipInstructions:'true'});
   }

  // getUserData(){
  //   this.connection.getData().then((res)=>{
  //     this.user = res;
  //     this._userInit();
  //   });
  // }

  // _userInit(){
  //   if(this.user.name){
  //     this.userTitle = this.$translate.instant('home.you_getting_ready',{user:this.user.name});
  //     this.$scope.$apply();
  //   }
  // }

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
      localStorage.removeItem('muteMusic');
    }else{
      audio.pause();
      localStorage.setItem('muteMusic','mute');
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

  // secondEnd(duration, noOfMoves, instructionsClickCount, win, firstMoveTime){
  //   let lowConfidence = 0;
  //   let badTimeMan = 0;
  //   let perfectionism = 0;
  //   let negThink = 0;
  //   let lackRicuz = 0;
  //   let impulsivity = 0;
  //   let slowStarter = 0;
  //   let panic = 0;
  //   let frustration = 0;
    
  //   // Successful Game Duration

  //     if (duration <= 80000){}
  //     else if (duration > 80000 && duration <= 90000){ badTimeMan+=6; perfectionism +=6; }
  //     else if (duration > 90000 && duration <= 100000){ badTimeMan+=8; perfectionism +=8; }
  //     else if (duration > 100000 && duration <= 115000){ badTimeMan+=10; perfectionism +=10; }
  //     else if (duration > 116000){ badTimeMan+=10; perfectionism +=10; }


  //   // Instruction Button

  //   switch (instructionsClickCount) {
  //     case 0:  break;
  //     case 1: impulsivity +=5; break;
  //     case instructionsClickCount >= 2: impulsivity +=10; break;
  //   }

  //   // Total # of moves

  //     if (noOfMoves > 0 && noOfMoves < 46){}
  //     else if (noOfMoves >= 46 && noOfMoves < 81){ impulsivity +=5; frustration+=5; }
  //     else if (noOfMoves >= 81){ impulsivity +=10; frustration+=10; }

  //   this.result[1] = [lowConfidence,badTimeMan,perfectionism,negThink,lackRicuz,impulsivity,slowStarter,panic,frustration];
  //   console.log(this.result[1]);
  // }

  // thirdEnd(duration, noOfMoves, instructionsClickCount, win, firstMoveTime){

  //   let lowConfidence = 0;
  //   let badTimeMan = 0;
  //   let perfectionism = 0;
  //   let negThink = 0;
  //   let lackRicuz = 0;
  //   let impulsivity = 0;
  //   let slowStarter = 0;
  //   let panic = 0;
  //   let frustration = 0;
    
  //   // Successful Game Duration

  //     if (duration <= 90000){}
  //     else if (duration > 90000 && duration <= 100000){ badTimeMan+=2; }
  //     else if (duration > 100000 && duration <= 115000){ badTimeMan+=4; perfectionism +=4; }
  //     else if (duration > 116000){ badTimeMan+=10; perfectionism +=6; }

  //   // Instruction Button

  //   switch (instructionsClickCount) {
  //     case 0:  break;
  //     case 1: impulsivity +=5; break;
  //     case instructionsClickCount >= 2: impulsivity +=10; break;
  //   }

  //   this.result[2] = [lowConfidence,badTimeMan,perfectionism,negThink,lackRicuz,impulsivity,slowStarter,panic,frustration];
  //   console.log(this.result[2]);
  // }

  // fourthEnd(duration, noOfMoves, instructionsClickCount, win, firstMoveTime){

  //   let lowConfidence = 0;
  //   let badTimeMan = 0;
  //   let perfectionism = 0;
  //   let negThink = 0;
  //   let lackRicuz = 0;
  //   let impulsivity = 0;
  //   let slowStarter = 0;
  //   let panic = 0;
  //   let frustration = 0;

  //   if (win == true){
  //   // Successful Game Duration
  //     if (duration <= 60000){}
  //     else if (duration > 60000 && duration <= 70000){ lowConfidence +=1; badTimeMan+=2; negThink += 1; slackRicuz += 2; }
  //     else if (duration > 70000 && duration <= 80000){ lowConfidence +=3; badTimeMan+=5; perfectionism +=2; negThink += 3; lackRicuz += 3; }
  //     else if (duration > 80000 && duration <= 90000){ lowConfidence +=5; badTimeMan+=7; perfectionism +=5; negThink += 5; lackRicuz += 5; }
  //     else if (duration > 90000 && duration <= 100000){ lowConfidence +=7; badTimeMan+=9; perfectionism +=9; negThink += 7; lackRicuz += 7; }
  //     else if (duration > 100000 && duration <= 115000){ lowConfidence +=10; badTimeMan+=10; perfectionism +=10; negThink += 10; lackRicuz += 10;  }
  //     else if (duration > 116000){ lowConfidence +=10; badTimeMan+=10; perfectionism +=10; negThink += 10; lackRicuz += 10; }
  // }else{
  //   // Game Duration When Time is Up
  //     if (duration <= 30000){  badTimeMan+=10; }
  //     else if (duration > 30000 && duration <= 40000){ badTimeMan+=9; }
  //     else if (duration > 40000 && duration <= 50000){ badTimeMan+=8; }
  //     else if (duration > 50000 && duration <= 60000){ badTimeMan+=7; }
  //     else if (duration > 60000 && duration <= 70000){ lowConfidence +=4; badTimeMan+=7; negThink +=4; lackRicuz += 4; }
  //     else if (duration > 70000 && duration <= 80000){ lowConfidence +=7; badTimeMan+=7; negThink +=7; lackRicuz +=7; }
  //     else if (duration > 80000 && duration <= 90000){ lowConfidence +=9; badTimeMan+=9; negThink +=9; lackRicuz +=9; }
  //     else if (duration > 90000 && duration <= 100000){ lowConfidence +=10; badTimeMan+=10; perfectionism +=5; negThink +=10; lackRicuz +=10; }
  //     else if (duration > 100000 && duration <= 115000){ lowConfidence +=10; badTimeMan+=10; perfectionism +=10; negThink +=10; lackRicuz +=10; }
  //     else if (duration > 116000){ lowConfidence +=10; badTimeMan+=10; perfectionism +=10; negThink +=10; lackRicuz +=10; }

  // }
  //   // Instruction Button
  //   switch (instructionsClickCount) {
  //     case 0:  break;
  //     case 1: impulsivity +=5; break;
  //     case instructionsClickCount >= 2: impulsivity +=10; break;
  //   }

  //   this.result[3] = [lowConfidence,badTimeMan,perfectionism,negThink,lackRicuz,impulsivity,slowStarter,panic,frustration];
  //   console.log(this.result[3]);
  // }


  // fifthEnd(duration, noOfMoves, instructionsClickCount, win, firstMoveTime){

  //   let lowConfidence = 0;
  //   let badTimeMan = 0;
  //   let perfectionism = 0;
  //   let negThink = 0;
  //   let lackRicuz = 0;
  //   let impulsivity = 0;
  //   let slowStarter = 0;
  //   let panic = 0;
  //   let frustration = 0;

  //   // // Successful Game Duration
  //   // switch (duration) {
  //   //   case (duration <= 60000): break;
  //   //   case (duration > 60000 && duration <= 70000): lowConfidence +=1; badTimeMan+=2; negThink += 1; slowStarter += 1; break;
  //   //   case (duration > 70000 && duration <= 80000): lowConfidence +=1; badTimeMan+=5; perfectionism +=2; negThink += 2; lackRicuz += 2; slowStarter += 5; panic += 5; break;
  //   //   case (duration > 80000 && duration <= 90000): lowConfidence +=1; badTimeMan+=7; perfectionism +=5; negThink += 4; lackRicuz += 5; slowStarter += 7; panic += 5; break;
  //   //   case (duration > 90000 && duration <= 100000): lowConfidence +=2; badTimeMan+=4; perfectionism +=4; negThink += 5; lackRicuz += 7; slowStarter += 9; break;
  //   //   case (duration > 100000 && duration <= 115000): lowConfidence +=5; badTimeMan+=6; perfectionism +=6; negThink += 6; lackRicuz += 6; impulsivity +=6; slowStarter += 6; panic += 6; break;
  //   //   case duration > 116000: lowConfidence +=8; badTimeMan+=10; perfectionism +=10; negThink += 8; lackRicuz += 10; slowStarter += 10; break;
  //   // }

  //   // Instruction Button

  //   switch (instructionsClickCount) {
  //     case 0:  break;
  //     case 1: impulsivity +=5; break;
  //     case instructionsClickCount >= 2: impulsivity +=10; break;
  //   }

  //   // Total # of moves

  //     if (noOfMoves >= 0 && noOfMoves < 15){}
  //     else if (noOfMoves >= 15 && noOfMoves < 25){ lowConfidence +=3; negThink +=1; lackRicuz+=2; panic+=5; }
  //     else if (noOfMoves >= 25){ lowConfidence +=10; negThink +=2; lackRicuz+=4; panic+=10; }


  //   this.result[4] = [lowConfidence,badTimeMan,perfectionism,negThink,lackRicuz,impulsivity,slowStarter,panic,frustration];
  //   console.log(this.result[4]);
  // }



}
export default GamesController;
