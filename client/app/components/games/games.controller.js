import angular from 'angular';

class GamesController {
  constructor($translate, $state, connection, $document, $interval, $scope, $window, gamesService, parkingLotService, towerService, mouseGameService, mazeraceService, skipService, gameScoreValue, orderOfGames, helperService, estimationOfResults) {
    this.$translate = $translate;
    this.$state = $state;
    this.$document = $document;
    this.$window = $window;
    this.connection = connection;
    this.firstStart = false;
    this.timeRemain = '00:00';
    this.seconds = 300;
    this.secondsleft = 0;
    this.gameSecSum = 0;
    this.$interval = $interval;
    this.gameNumber = 0;
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
    this.gameBefore = '';
    this.showMouseRetry = true;
    this.estimationOfResults = estimationOfResults;
  }

  $onInit() {
    this.$scope.$on('$locationChangeStart', (event) => {
      event.preventDefault();
    });

    if (localStorage.getItem('gamePage') == null) {
      console.log('FIRST START');
      this.firstStart = false;
      angular.element(this.$document[0]).ready(() => {
        this.$window.nogic.initialize(this.$document[0].getElementById('main-game-wrapper'), { language: 'en', level: this.orderOfGames.level[0] });
      });
    } else if (localStorage.getItem('gamePageSecond') == null) {
      console.log('SECOND START');
      this.firstStart = true;
      angular.element(this.$document[0]).ready(() => {
        this.$window.nogic.initialize(this.$document[0].getElementById('main-game-wrapper'), { language: 'en', level: this.orderOfGames.level[0] });
      });
    } else {
      console.log('THIRD START');
      const audio = this.$document[0].getElementById('backgroundMusic');
      audio.play();
      this.showWindow = false;
      this.countdownTimer = this.$interval(this.startTimer, 1000);
      this.orderOfGames.level[0] = this.randomInteger(1, 10);
      console.log(this.orderOfGames.level[0]);


      this.$window.nogic.initialize(this.$document[0].getElementById('main-game-wrapper'), { language: 'en', level: this.orderOfGames.level[0] });
    }

    this.gameNumber = 1;


    this.getUserData();

    window.gameEnded = (duration, noOfMoves, instructionsClickCount, win, firstMoveTime) => {
      this.gameSecSum = (300 - this.seconds);

      if (win) {
        this.gameSuccComp++;
      }

      this.$window.alert(`duration = ${duration} ` + `firstMoveTime = ${firstMoveTime} ` + `noOfMoves = ${noOfMoves} ` + `instructionsClickCount = ${instructionsClickCount} ` + `win = ${win} `);

      if (this.orderOfGames.gameSequence[this.gameNumber - 1] === 'mousetrap') { this.mousewin = win; this.showMouseRetry = win; }

      if (this.orderOfGames.gameSequence[this.gameNumber - 1] === 'mousetrap' && this.mousewin === false) {} else {
        this.showMouseRetry = true;
        switch (this.gameNumber) {
          case 1:
            this.parkingLotService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
            break;
          case 2:
            this.towerService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
            break;
          case 3:
            this.mouseGameService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
            break;
          case 4:
            this.mazeraceService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
            break;
          case 5:
            this.parkingLotService.endLastGame(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
            this.gamesService.TotalTimeFOrLastGame(this.secondsleft);
            break;
          default:
            break;
        }

        this.gameNumber++;

        switch (this.gameNumber) {
          // tower
          case 2:
            this.$window.nogic.uninitialize();
            if (localStorage.getItem('gamePageSecond') !== null) {
              this.orderOfGames.level[1] = this.randomInteger(1, 10);
            }
            console.log(this.orderOfGames.level[1], 'WTF');
            if (this.orderOfGames.gameSequence[1] === 'tower') {
              this.gameBefore = 'tower';
              this.createGame(this.$window.nogic2, { language: 'en', noOfRings: this.orderOfGames.level[1] });
            }

            if (this.orderOfGames.gameSequence[1] === 'mousetrap') {
              this.gameBefore = 'mousetrap';
              this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'false' });
            }

            if (this.orderOfGames.gameSequence[1] === 'mazerace') {
              this.gameBefore = 'mazerace';
              this.createGame(this.$window.nogic4, { language: 'en', level: this.orderOfGames.level[1] });
            }
            break;

            // mousetrap
          case 3:
            if (localStorage.getItem('gamePageSecond') !== null) {
              this.orderOfGames.level[2] = this.randomInteger(1, 10);
            }
            switch (this.orderOfGames.gameSequence[1]) {
              case 1: this.$window.nogic2.uninitialize(); break;
              case 2: this.$window.nogic3.uninitialize(); break;
              case 3: this.$window.nogic4.uninitialize(); break;
              default:
                break;
            }

            if (this.orderOfGames.gameSequence[2] === 'tower') {
              this.gameBefore = 'tower';
              this.createGame(this.$window.nogic2, { language: 'en', noOfRings: this.orderOfGames.level[2] });
            }

            if (this.orderOfGames.gameSequence[2] === 'mousetrap') {
              this.gameBefore = 'mousetrap';
              this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'false' });
            }

            if (this.orderOfGames.gameSequence[2] === 'mazerace') {
              this.gameBefore = 'mazerace';
              this.createGame(this.$window.nogic4, { language: 'en', level: this.orderOfGames.level[2] });
            }
            break;
            // moserace
          case 4:
            if (localStorage.getItem('gamePageSecond') !== null) {
              this.orderOfGames.level[3] = this.randomInteger(1, 10);
            }
            switch (this.orderOfGames.gameSequence[2]) {
              case 1: this.$window.nogic2.uninitialize(); break;
              case 2: this.$window.nogic3.uninitialize(); break;
              case 3: this.$window.nogic4.uninitialize(); break;
              default:
                break;
            }

            if (this.orderOfGames.gameSequence[3] === 'tower') {
              this.gameBefore = 'tower';
              this.createGame(this.$window.nogic2, { language: 'en', noOfRings: this.orderOfGames.level[3] });
            }

            if (this.orderOfGames.gameSequence[3] === 'mousetrap') {
              this.gameBefore = 'mousetrap';
              this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'false' });
            }

            if (this.orderOfGames.gameSequence[3] === 'mazerace') {
              this.gameBefore = 'mazerace';
              this.createGame(this.$window.nogic4, { language: 'en', level: this.orderOfGames.level[3] });
            }
            this.secondsleft = 300 - this.seconds - this.gameSecSum;
            this.gameSecSum += this.secondsleft;
            this.gameBeforeLastTime = this.secondsleft;
            break;
            // parkinglot
          case 5:
            if (localStorage.getItem('gamePageSecond') !== null) {
              this.orderOfGames.level[4] = this.randomInteger(1, 10);
            }
            switch (this.orderOfGames.gameSequence[3]) {
              case 1: this.$window.nogic2.uninitialize(); break;
              case 2: this.$window.nogic3.uninitialize(); break;
              case 3: this.$window.nogic4.uninitialize(); break;
              default:
                break;
            }
            this.createGame(this.$window.nogic, { language: 'en', level: this.orderOfGames.level[4] }); break;

          case 6:
            this.$window.nogic.uninitialize();
            this.gamesService.gameStatistic();

            if (localStorage.getItem('gamePage') == null) {
              localStorage.setItem('gamePage', location.pathname);
            } else {
              localStorage.setItem('gamePageSecond', location.pathname);
            }
            this.stateChange('home');
            break;
          default:
            break;
        }
      }
    };
  }

  getUserData() {
    this.connection.getData().then((res) => {
      this.user = res;

      this.estimationOfResults.parkinglot = this.user.estimationOfResults.parkinglot;
      this.estimationOfResults.mazerace = this.user.estimationOfResults.mazerace;
      this.estimationOfResults.mousetrap = this.user.estimationOfResults.mousetrap;
      this.estimationOfResults.tower = this.user.estimationOfResults.tower;
      this.estimationOfResults.parkingLotLast = this.user.estimationOfResults.parkingLotLast;
      this.estimationOfResults.gameEnd = this.user.estimationOfResults.gameEnd;

      this.orderOfGames.gameSequence = this.user.gameSequence;
      this.orderOfGames.level = this.user.level;
      this._userInit();
    });
  }

  _userInit() {
    if (this.user && this.user.name) {
      this.userTitle = this.$translate.instant('home.you_getting_ready', { user: this.user.name });
      this.$scope.$apply();
    }
  }

  $onDestroy() {
    this.removeListeners();
  }

  clearStorage() {
    localStorage.removeItem('gamePage');
    this.firstStart = false;
  }

  closeModal(val) {
    const audio = this.$document[0].getElementById('backgroundMusic');
    audio.play();
    this.gameScoreValue.selfAssessment = val;
    this.showWindow = !this.showWindow;
    this.countdownTimer = this.$interval(this.startTimer, 1000);
  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  startTimer() {
    const minutes = Math.round((this.seconds - 30) / 60);
    let remainingSeconds = this.seconds % 60;

    if (remainingSeconds < 10) {
      remainingSeconds = `0${remainingSeconds}`;
    }

    this.timeRemain = `${minutes}:${remainingSeconds}`;

    if (this.seconds === 0) {
      this.$interval.cancel(this.countdownTimer);
      this.timeRemain = '00:00';
      console.log('END TIME', this.gameNumber);

      switch (this.gameNumber) {
        case 1:
          console.log('END TIME 1 GAME');
          this.gamesService.EndTimeInGame('Game 1');
          break;
        case 2:
          console.log('END TIME 2 GAME');
          this.gamesService.EndTimeInGame('Game 2');
          break;
        case 3:
          console.log('END TIME 3 GAME');
          this.gamesService.EndTimeInGame('Game 3');
          break;
        case 5:
          console.log('END TIME 5 GAME', this.gameSecSum);
          this.gamesService.EndTimeInLastGame(this.gameSecSum);
          break;
        default:
          break;
      }

      this.showDialogEnd = true;
    } else {
      this.seconds--;
    }
  }

  skipGame() {
    switch (this.gameNumber) {
      case 1:
        this.secondsleft = 300 - this.seconds;
        this.gameSecSum += this.secondsleft;

        this.skipService.GameSkip(this.secondsleft, this.orderOfGames.gameSequence[0]);
        break;
      case 2:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;

        this.skipService.GameSkip(this.secondsleft, this.orderOfGames.gameSequence[1]);
        break;
      case 3:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;

        this.skipService.GameSkip(this.secondsleft, this.orderOfGames.gameSequence[2]);
        break;
      case 4:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gameBeforeLastTime = this.secondsleft;

        this.skipService.GameSkip(this.secondsleft, this.orderOfGames.gameSequence[3]);
        break;
      case 5:
        this.secondsleft = 300 - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;

        this.parkingLotService.endLastGame(0, 0, 0, false, 0);
        break;
      default:
        break;
    }

    this.gameNumber++;
    switch (this.gameNumber) {
      // tower
      case 2:
        this.$window.nogic.uninitialize();
        if (localStorage.getItem('gamePageSecond') !== null) {
          this.orderOfGames.level[1] = this.randomInteger(1, 10);
        }
        if (this.orderOfGames.gameSequence[1] === 'tower') {
          this.gameBefore = 'tower';
          this.createGame(this.$window.nogic2, { language: 'en', noOfRings: 4 });
        }

        if (this.orderOfGames.gameSequence[1] === 'mousetrap') {
          this.gameBefore = 'mousetrap';
          this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'false' });
        }

        if (this.orderOfGames.gameSequence[1] === 'mazerace') {
          this.gameBefore = 'mazerace';
          this.createGame(this.$window.nogic4, { language: 'en', level: 2 });
        }
        break;
        // mousetrap
      case 3:
        if (localStorage.getItem('gamePageSecond') !== null) {
          this.orderOfGames.level[2] = this.randomInteger(1, 10);
        }
        switch (this.orderOfGames.gameSequence[1]) {
          case 1: this.$window.nogic2.uninitialize(); break;
          case 2: this.$window.nogic3.uninitialize(); break;
          case 3: this.$window.nogic4.uninitialize(); break;
          default:
            break;
        }
        this.showMouseRetry = true;
        if (this.orderOfGames.gameSequence[2] === 'tower') {
          this.gameBefore = 'tower';
          this.createGame(this.$window.nogic2, { language: 'en', noOfRings: 4 });
        }

        if (this.orderOfGames.gameSequence[2] === 'mousetrap') {
          this.gameBefore = 'mousetrap';
          this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'false' });
        }

        if (this.orderOfGames.gameSequence[2] === 'mazerace') {
          this.gameBefore = 'mazerace';
          this.createGame(this.$window.nogic4, { language: 'en', level: 2 });
        }
        break;
        // moserace
      case 4:
        if (localStorage.getItem('gamePageSecond') !== null) {
          this.orderOfGames.level[3] = this.randomInteger(1, 10);
        }
        switch (this.orderOfGames.gameSequence[2]) {
          case 1: this.$window.nogic2.uninitialize(); break;
          case 2: this.$window.nogic3.uninitialize(); break;
          case 3: this.$window.nogic4.uninitialize(); break;
          default:
            break;
        }
        this.showMouseRetry = true;
        if (this.orderOfGames.gameSequence[3] === 'tower') {
          this.gameBefore = 'tower';
          this.createGame(this.$window.nogic2, { language: 'en', noOfRings: 4 });
        }

        if (this.orderOfGames.gameSequence[3] === 'mousetrap') {
          this.gameBefore = 'mousetrap';
          this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'false' });
        }

        if (this.orderOfGames.gameSequence[3] === 'mazerace') {
          this.gameBefore = 'mazerace';
          this.createGame(this.$window.nogic4, { language: 'en', level: 2 });
        }
        break;
        // parkinglot
      case 5:
        if (localStorage.getItem('gamePageSecond') !== null) {
          this.orderOfGames.level[4] = this.randomInteger(1, 10);
        }
        if (this.seconds > 180) { this.showDialog = true; this.gameNumber = 5; }
        this.showMouseRetry = true;

        switch (this.orderOfGames.gameSequence[3]) {
          case 1: this.$window.nogic2.uninitialize(); break;
          case 2: this.$window.nogic3.uninitialize(); break;
          case 3: this.$window.nogic4.uninitialize(); break;
          default:
            break;
        }

        this.createGame(this.$window.nogic, { language: 'en', level: 3 }); break;
      case 6:

        console.log(this.estimationOfResults.gameEnd);
        this.$window.nogic.uninitialize();
        this.gamesService.TotalTimeFOrLastGame(300 - this.secondsleft);
        this.gamesService.gameStatistic();
        this.gameNumber = 5;
        this.stateChange('home');
        break;
      default:
        this.gameNumber = 5;
        break;
    }
  }

  restartMosetrap() {
    this.$window.nogic3.uninitialize();
    this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'true' });
  }

  reloadPage(state) {
    if (localStorage.getItem('gamePage') == null) {
      localStorage.setItem('gamePage', location.pathname);
    } else {
      localStorage.setItem('gamePageSecond', location.pathname);
    }
    this.removeListeners();
    this.$state.reload();
  }

  removeListeners() {
    this.$interval.cancel(this.countdownTimer);
    this.showWindow = false;
    this.soundChange();
    const wrapper = this.$document[0].getElementById('main-game-wrapper');
    const children = wrapper.childNodes;
    for (let i = 0; i < children.length; i++) {
      wrapper.removeChild(children[i]);
    }
  }

  stateChange(state) {
    if (localStorage.getItem('gamePage') == null) {
      localStorage.setItem('gamePage', location.pathname);
    } else {
      localStorage.setItem('gamePageSecond', location.pathname);
    }
    this.removeListeners();
    this.$state.go(state);
  }

  soundChange() {
    const audio = this.$document[0].getElementById('backgroundMusic');
    if (this.sound === true) {
      audio.play();
      this.gameScoreValue.muteMusic = 0;
    } else {
      audio.pause();
      this.gameScoreValue.muteMusic = 1;
    }
    this.sound = !this.sound;
  }

  createGame(initializer, options) {
    const wrapper = this.$document[0].getElementById('main-game-wrapper');
    const children = wrapper.childNodes;
    for (let i = 0; i < children.length; i += 1) {
      if (children[i].nodeType === this.$window.Node.ELEMENT_NODE) {
        wrapper.removeChild(children[i]);
      }
    }
    const holder = this.$document[0].createElement('div');
    wrapper.appendChild(holder);
    initializer.initialize(holder, options);
  }
}

GamesController.$inject = ['$translate', '$state', 'connection', '$document', '$interval', '$scope', '$window', 'gamesService', 'parkingLotService', 'towerService', 'mouseGameService', 'mazeraceService', 'skipService', 'gameScoreValue', 'orderOfGames', 'helperService', 'estimationOfResults'];
export default GamesController;
