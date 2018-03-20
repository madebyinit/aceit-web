
class GamesController {
  constructor($translate,$document,$timeout,$state,connection, $interval,$scope) {
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
    this.showWindow = true;
    this.$scope = $scope;
    }

  $onInit(){
    this.getUserData();
    this.playedFirstVideo = false;
    this.gameNumber = 1; 
    this._watchData();
    this.maxRating = 5;
    this.rating = 0;
    this.validateStars(this.rating);
    this.starsArray = this.getStarsArray();


    window.gameEnded = function(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
  
          alert('duration = ' + duration);
          alert('noOfMoves = ' + noOfMoves);
          alert('instructionsClickCount = ' + instructionsClickCount);
          alert('win = ' + win);
          alert('firstMoveTime = ' + firstMoveTime);

          this.gameNumber ++;
          console.log("!!!!!!!!", this.gameNumber,"!!!!!!!!!!!!");
          switch (this.gameNumber) {
            case 2:
              angular.element(document).ready(()=>{
            var game = nogic3.initialize(document.getElementById('holder1'), {language:'en', level:5});
             });
            break;
      
            case 3:
            angular.element(document).ready(()=>{
            var game = nogic4.initialize(document.getElementById('holder3'), {language:'en', noOfRings:4});
            });
            break;
      
            case 4:
            angular.element(document).ready(()=>{
            var game = nogic1.initialize(document.getElementById('holder'), {language:'en', noOfRings:4});
            });
            break;
      
            case 5:
            console.log(this.gameNumber);
            angular.element(document).ready(()=>{
              var game = nogic3.initialize(document.getElementById('holder2'), {language:'en', level:6});
            });
            break;
        }

        }.bind(this);

    angular.element(document).ready(()=>{
      //moserace
      // var  game1 = nogic1.initialize(document.getElementById('holder'), {language:'en', level:11});
      //mousetrap
      // var  game2 = nogic2.initialize(document.getElementById('holder1'), {language:'en', skipInstructions:'true'});
      // //parkinglot
      var game = nogic3.initialize(document.getElementById('holder2'), {language:'en', level:5});
      // //tower
      // var game = nogic4.initialize(document.getElementById('holder3'), {language:'en', noOfRings:4});
  
    });

  }

  $onDestroy(){
    this.$document.unbind('scroll');
    angular.element(document);
    document.getElementById('backgroundMusic');
  }

  closeModal(){
    this.showWindow = !this.showWindow;
    var countdownTimer = this.$interval(this.startTimer.bind(this),1000);
  }

  startTimer(){
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
  var audio = document.getElementById("backgroundMusic"); 

  if(this.sound == true){
    audio.play(); 
  }else{
    audio.pause();
  }

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
    // this.gameNumber++;
    document.getElementById("nogic").remove();
  }
  
  test2() {
    var textnode = document.createTextNode("Water MORE TEXT NEEDED");
    let c = document.getElementById('holder2').childNodes[0];
    // let p = c.parentElement;
    // p.replaceChild(c.cloneNode(true), c);
    // // document.getElementById('holder2').parentNode.removeChild(div);
    c.replaceChild(textnode, c.childNodes[0]);
    // nogic1.initialize(document.getElementById('holder2'), {language:'en', level:1});

  }

  gamesEnded(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {

    alert('duration = ' + duration);
    alert('noOfMoves = ' + noOfMoves);
    alert('instructionsClickCount = ' + instructionsClickCount);
    alert('win = ' + win);
    alert('firstMoveTime = ' + firstMoveTime);
  }

  _watchData(){
    this.watchChange = this.$scope.$watch(() => this.answer,(newVal) =>{
      if(newVal){
        this.$timeout(()=> {
          this.rating = newVal;
          this.starsArray = this.getStarsArray();
          this.validateStars(newVal);
        },200);
      }
    });
  }

  getStarsArray() {
    let starsArray = [];
      for (let index = 0; index < this.maxRating; index++) {
        let starItem = {
          index: index,
          class: 'star-off'
        };
        starsArray.push(starItem);
      }
      return starsArray;
    };

  setRating(rating) {
    if (this.readOnly) {
      return;
    }
    this.rating = rating;
    this.validateStars(this.rating);
  };

  setMouseOverRating(rating) {
    if (this.readOnly) {
      return;
    }
    this.validateStars(rating);
  };

  validateStars(rating) {
    if (!this.starsArray || this.starsArray.length === 0) {
      return;
    }
    for (let index = 0; index < this.starsArray.length; index++) {
      let starItem = this.starsArray[index];
      if (index <= (rating - 1)) {
        starItem.class = 'star-on';
      } else {
        starItem.class = 'star-off';
      }
    }
  };

}

export default GamesController;
