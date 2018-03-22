
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
    this.timeRemain = "00:00";
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
  
          // alert('duration = ' + duration);
          // alert('noOfMoves = ' + noOfMoves);
          // alert('instructionsClickCount = ' + instructionsClickCount);
          // alert('win = ' + win);
          // alert('firstMoveTime = ' + firstMoveTime);

          this.gameNumber ++;

          switch (this.gameNumber) {
            case 2:
            //moserace
            this.createGame(nogic1, {language: 'en', level: 1});
            break;
      
            case 3:
            //mousetrap
            this.createGame(nogic2, {language:'en', skipInstructions:'true'});
            break;
      
            case 4:
            //tower
            this.createGame(nogic4, {language:'en', noOfRings:4});
            break;
      
            case 5:
            //parkinglot
            this.createGame(nogic3, {language:'en', level:6});
            break;

            case 6:
            this.stateChange('summary');
            break;
        }

        }.bind(this);

    angular.element(document).ready(()=>{
      this.createGame(nogic3, {language:'en', level:5})
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
      this.$interval.cancel(this.countdownTimer);
      this.timeRemain = "00:00";
      this.showDialogEnd = true;
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
  
  test2() {
    this.createGame(nogic1, {language: 'en', level: 1});
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
