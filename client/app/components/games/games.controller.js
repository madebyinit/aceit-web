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
    this.estimationOfResults = estimationOfResults;
    this.seconds = this.estimationOfResults.GP.GSD;
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
    this.showMazeRetry = true;
    this.duration = 0;
    this.instructionsClick = 0;
    this.testcheck = true;
    this.classes = ['red', 'green', 'blue'];
    this.showGame = [false, true, true, true, true, true, true];
    this.widthGame = ['100%', '0%', '0%', '0%', '0%', '0%', '0%'];
    this.gameData = [0, 0, 0, false, 0];
  }

  $onInit() {
    this.gameScoreValue = {
      parkinglot: {},
      mazerace: {},
      mousetrap: {},
      tower: {},
      parkinglotLast: {},
      endTime: {},
      GP: {},
      muteMusic: 0,
      gamesSuccessfullyCompleted: 0,
      selfAssessment: 0,
    };

    this.gamesService.setgamesSuccessfullyCompleted(0);
    this.gamesService.setSelfassestment(10);

    this.$scope.$on('$locationChangeStart', (event) => {
      event.preventDefault();
    });

    window.onkeydown = function () {
      if (event.ctrlKey) {
        if (event.preventDefault) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
      switch (event.keyCode) {
        case 116: // F5 button
          event.returnValue = false;
          event.keyCode = 0;
          return false;
          break;
        case 82: // R button
          if (event.ctrlKey) {
            event.returnValue = false;
            event.keyCode = 0;
            return false;
          }
          break;
        default:
          console.log('DEFAULT');
          break;
      }
    };

    if (localStorage.getItem('gamePage') == null) {
      console.log('FIRST START');
      this.firstStart = false;
      angular.element(this.$document[0]).ready(() => {
        // const data = this.$window.nogic.initialize(this.$document[0].getElementById('main-game-wrapper'), { language: 'en', level: this.orderOfGames.level[0] });
        // this.gamesService.setGameStatus(data);
      });
    } else if (localStorage.getItem('gamePageSecond') == null) {
      console.log('SECOND START');
      this.firstStart = true;
      angular.element(this.$document[0]).ready(() => {
        // const data = this.$window.nogic.initialize(this.$document[0].getElementById('main-game-wrapper'), { language: 'en', level: this.orderOfGames.level[0] });
        // this.gamesService.setGameStatus(data);
      });
    } else {
      console.log('THIRD START');
      const audio = this.$document[0].getElementById('backgroundMusic');
      audio.play();
      this.firstStart = true;
      this.showWindow = false;
      this.countdownTimer = this.$interval(this.startTimer, 1000);
      this.orderOfGames.level[0] = this.randomInteger(1, 10);
      // const data = this.$window.nogic.initialize(this.$document[0].getElementById('main-game-wrapper'), { language: 'en', level: this.orderOfGames.level[0] });
      // this.gamesService.setGameStatus(data);
    }
    const gameStart = localStorage.getItem('gameStart');
    console.log(gameStart, 'TTTTTTTTTTTTTTTTTTTTTTT');

    this.gameNumber = 1;

    this.getUserData();

    console.log(this.orderOfGames.gameSequence);
  }

  getUserData() {
    this.connection.getData().then((res) => {
      this.user = res;
      console.log(this.user);
      if (this.estimationOfResults.FeedbackPosition['1'] === undefined) {
        this.helperService.gameSequence();
        this.helperService.feedbackCounter();
        this.helperService.Results();
        this.helperService.feedbackSentences();
        this.helperService.SuggestedTools();
        this.helperService.FeedbackChange();
        this.seconds = this.estimationOfResults.GP.GSD;
        console.log(this.estimationOfResults);
      } else {
        this.estimationOfResults.parkinglot = this.user.estimationOfResults.parkinglot;
        this.estimationOfResults.mazerace = this.user.estimationOfResults.mazerace;
        this.estimationOfResults.mousetrap = this.user.estimationOfResults.mousetrap;
        this.estimationOfResults.tower = this.user.estimationOfResults.tower;
        this.estimationOfResults.parkingLotLast = this.user.estimationOfResults.parkingLotLast;
        this.estimationOfResults.gameEnd = this.user.estimationOfResults.gameEnd;
        this.estimationOfResults.Feedback = this.user.estimationOfResults.Feedback;
        this.estimationOfResults.GP = this.user.estimationOfResults.GP;
        this.estimationOfResults.SuggestPoints = this.user.estimationOfResults.SuggestPoints;
        this.estimationOfResults.feedbackCounter = this.user.estimationOfResults.feedbackCounter;
        this.estimationOfResults.FeedbackPosition = this.user.estimationOfResults.FeedbackPosition;

        this.orderOfGames.gameSequence = this.user.gameSequence;
        this.orderOfGames.level = this.user.level;
        this.orderOfGames.UPDI = this.user.UPDI;

        this.seconds = this.user.estimationOfResults.GP.GSD;
        console.log('WE FIND ESTIM', this.estimationOfResults);
      }


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

  gameEnded(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
    this.gameSecSum = (this.estimationOfResults.GP.GSD - this.seconds);

    if (!win && this.orderOfGames.gameSequence[this.gameNumber - 1] === 'tower') { win = true; console.log('tower true'); }

    if (win) {
      this.gameSuccComp++;
    }

    if (this.orderOfGames.gameSequence[this.gameNumber - 1] === 'mousetrap') { this.mousewin = win; this.showMouseRetry = win; }

    if (this.orderOfGames.gameSequence[this.gameNumber - 1] === 'mazerace') { this.mousewin = win; this.showMazeRetry = win; }

    if (this.orderOfGames.gameSequence[this.gameNumber - 1] === 'mousetrap' && this.mousewin === false) {
      this.duration += duration;
      this.instructionsClick += instructionsClickCount;
      console.log('stop');
      console.log(this.duration);
    } else if (this.orderOfGames.gameSequence[this.gameNumber - 1] === 'mazerace' && this.mousewin === false) {
      console.log('stop');
      this.duration += duration;
      console.log(this.duration);
      this.instructionsClick += instructionsClickCount;
    } else {
      this.showMouseRetry = true;
      console.log(this.duration);
      this.duration += duration;
      console.log(this.duration);
      this.instructionsClick += instructionsClickCount;
      switch (this.orderOfGames.gameSequence[this.gameNumber - 1]) {
        case 'parkinglot':
          if (this.gameNumber === 1) {
            this.parkingLotService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
          } else {
            this.parkingLotService.endLastGame(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
            // this.gamesService.EndTimeInLastGame(this.estimationOfResults.GP.GSD - this.gameSecSum);
            // this.gamesService.TotalTimeFOrLastGame(this.estimationOfResults.GP.GSD - this.gameSecSum);
          }
          break;
        case 'tower':
          this.towerService.end(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
          break;
        case 'mousetrap':
          console.log(this.duration);
          this.mouseGameService.end(this.duration, noOfMoves, this.instructionsClick, win, firstMoveTime);
          break;
        case 'mazerace':
          this.mazeraceService.end(this.duration, noOfMoves, this.instructionsClick, win, firstMoveTime);
          break;
        default:
          break;
      }
      this.duration = 0;
      this.instructionsClick = 0;

      this.gameNumber++;

      switch (this.gameNumber) {
        // tower
        case 2:
          console.log(this.gameNumber - 1);
          console.log(this.orderOfGames.gameSequence[this.gameNumber - 2]);
          this.changeGame(this.gameNumber - 1, this.orderOfGames.gameSequence[this.gameNumber - 2]);
          // this.uninitializeGames(0);
          if (localStorage.getItem('gamePageSecond') !== null) {
            this.orderOfGames.level[1] = this.randomInteger(1, 10);
          }

          //this.gameSequence(1);
          break;

          // mousetrap
        case 3:
          console.log(this.gameNumber - 1);
          console.log(this.orderOfGames.gameSequence[this.gameNumber - 2]);
          this.changeGame(this.gameNumber - 1, this.orderOfGames.gameSequence[this.gameNumber - 2]);
          // this.uninitializeGames(1);

          //this.gameSequence(2);
          break;
          // moserace
        case 4:
          console.log(this.gameNumber - 1);
          console.log(this.orderOfGames.gameSequence[this.gameNumber - 2]);
          this.changeGame(this.gameNumber - 1, this.orderOfGames.gameSequence[this.gameNumber - 2]);
          // this.uninitializeGames(2);

          //this.gameSequence(3);

          this.secondsleft = this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
          this.gameSecSum += this.secondsleft;
          this.gameBeforeLastTime = this.secondsleft;
          break;
          // parkinglot
        case 5:
          console.log(this.gameNumber - 1);
          console.log(this.orderOfGames.gameSequence[this.gameNumber - 2]);
          this.changeGame(this.gameNumber - 1, this.orderOfGames.gameSequence[this.gameNumber - 2]);
          // this.uninitializeGames(3);
          // this.createGame(this.$window.nogic, { language: 'en', level: this.orderOfGames.level[4] }); break;
          break;
        case 6:
          // this.$window.nogic.uninitialize();
          this.gamesService.gameStatistic();

          if (localStorage.getItem('gamePage') == null) {
            localStorage.setItem('gamePage', true);
          } else {
            localStorage.setItem('gamePageSecond', true);
          }
          this.stateChange('home');
          break;
        default:
          break;
      }
    }
  }

  clearStorage() {
    localStorage.removeItem('gamePage');
    this.firstStart = false;
  }

  closeModal(val) {
    const audio = this.$document[0].getElementById('backgroundMusic');
    audio.play();
    this.gameScoreValue.selfAssessment = val;
    this.gamesService.setSelfassestment(val);
    this.showWindow = !this.showWindow;
    this.countdownTimer = this.$interval(this.startTimer, 1000);
  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  startTimer() {
    this.checkEndGame(this.orderOfGames.gameSequence[this.gameNumber - 1]);
    if (this.seconds !== undefined) {
      const minutes = Math.round((this.seconds - 30) / 60);
      let remainingSeconds = this.seconds % 60;

      if (remainingSeconds < 10) {
        remainingSeconds = `0${remainingSeconds}`;
      }

      this.timeRemain = `${minutes}:${remainingSeconds}`;

      if (this.seconds === 0) {
        this.$interval.cancel(this.countdownTimer);
        this.timeRemain = '00:00';
        let timeLastGame = 0;

        switch (this.gameNumber) {
          case 1:
            this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1]);
            this.gamesService.EndTimeInGame('Game 1');
            this.gamesService.gameStatistic();
            break;
          case 2:
            this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1], this.duration);
            this.gamesService.EndTimeInGame('Game 2');
            this.gamesService.gameStatistic();
            break;
          case 3:
            this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1], this.duration);
            this.gamesService.EndTimeInGame('Game 3');
            this.gamesService.gameStatistic();
            break;
          case 4:
            console.log(this.duration, (this.estimationOfResults.GP.GSD - this.gameSecSum));
            timeLastGame = Math.ceil(this.duration / 1000) + (this.estimationOfResults.GP.GSD - this.gameSecSum);
            console.log(timeLastGame);
            this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1], this.duration);
            this.gamesService.TotalTimeFOrFourthGame(timeLastGame);
            this.gamesService.gameStatistic();
            break;
          case 5:
            //this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1]);
            this.gamesService.EndTimeInLastGame(this.estimationOfResults.GP.GSD - this.gameSecSum);
            this.gamesService.TotalTimeFOrLastGame(this.estimationOfResults.GP.GSD - this.gameSecSum);
            this.gamesService.gameStatistic();
            break;
          default:
            break;
        }

        this.showDialogEnd = true;
      } else {
        this.seconds--;
      }
    }
  }

  skipGame() {
    this.showMazeRetry = true;

    this.$document[0].getElementById(this.orderOfGames.gameSequence[this.gameNumber - 1]).contentWindow.getGameResult();
    let duration = this.gameData[0];
    let noOfMoves = this.gameData[1];
    let instructionsClickCount = this.gameData[2];
    let win = this.gameData[3];
    let firstMoveTime = this.gameData[4];

    duration = this.$document[0].getElementById(this.orderOfGames.gameSequence[this.gameNumber - 1]).contentWindow.x;
    if (duration !== undefined) {
      noOfMoves = this.$document[0].getElementById(this.orderOfGames.gameSequence[this.gameNumber - 1]).contentWindow.y;
      instructionsClickCount = this.$document[0].getElementById(this.orderOfGames.gameSequence[this.gameNumber - 1]).contentWindow.z;
      win = this.$document[0].getElementById(this.orderOfGames.gameSequence[this.gameNumber - 1]).contentWindow.w;
      firstMoveTime = this.$document[0].getElementById(this.orderOfGames.gameSequence[this.gameNumber - 1]).contentWindow.q;
    } else {
      duration = 0;
    }

    switch (this.gameNumber) {
      case 1:
        this.secondsleft = this.estimationOfResults.GP.GSD - this.seconds;
        this.gameSecSum += this.secondsleft;
        this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1], this.duration, duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
        this.skipService.GameSkip(this.secondsleft, this.orderOfGames.gameSequence[0], this.estimationOfResults);
        break;
      case 2:
        this.secondsleft = this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1], this.duration, duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
        this.skipService.GameSkip(this.secondsleft + (this.duration / 1000), this.orderOfGames.gameSequence[1], this.estimationOfResults);
        this.duration = 0;
        break;
      case 3:
        this.secondsleft = this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1], this.duration, duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
        this.skipService.GameSkip(this.secondsleft + (this.duration / 1000), this.orderOfGames.gameSequence[2], this.estimationOfResults);
        this.duration = 0;
        break;
      case 4:
        this.secondsleft = this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gameBeforeLastTime = this.secondsleft;
        this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1], this.duration, duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
        this.skipService.GameSkip(this.secondsleft + (this.duration / 1000), this.orderOfGames.gameSequence[3], this.estimationOfResults);
        this.duration = 0;
        break;
      case 5:
        this.secondsleft = this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gamesService.setLastGame();
        // this.gamesService.getGameResult(this.orderOfGames.gameSequence[this.gameNumber - 1], this.duration);
        // this.parkingLotService.endLastGame(0, 0, 0, false, 0);
        // this.gamesService.setLastGame();
        break;
      default:
        break;
    }

    this.gameNumber++;

    switch (this.orderOfGames.gameSequence[this.gameNumber - 2]) {

      case 'parkinglot':
        console.log(this.gameNumber - 1);
        console.log(this.orderOfGames.gameSequence[this.gameNumber - 2]);
        this.changeGame(this.gameNumber - 1, this.orderOfGames.gameSequence[this.gameNumber - 2]);
        //this.uninitializeGames(0);
        if (localStorage.getItem('gamePageSecond') !== null) {
          this.orderOfGames.level[1] = this.randomInteger(1, 10);
        }

        //this.gameSequence(1);

        break;
      // tower
      case 'tower':
        console.log(this.gameNumber - 1);
        console.log(this.orderOfGames.gameSequence[this.gameNumber - 2]);
        this.changeGame(this.gameNumber - 1, this.orderOfGames.gameSequence[this.gameNumber - 2]);
        //this.uninitializeGames(0);
        if (localStorage.getItem('gamePageSecond') !== null) {
          this.orderOfGames.level[1] = this.randomInteger(1, 10);
        }

        //this.gameSequence(1);

        break;
        // mousetrap
      case 'mousetrap':
      console.log(this.gameNumber - 1);
      console.log(this.orderOfGames.gameSequence[this.gameNumber - 2]);
        // this.uninitializeGames(1);
        this.changeGame(this.gameNumber - 1, this.orderOfGames.gameSequence[this.gameNumber - 2]);
        this.showMouseRetry = true;

        //this.gameSequence(2);
        break;
        // moserace
      case 'mazerace':
        console.log(this.gameNumber - 1);
        // this.uninitializeGames(2);
        this.changeGame(this.gameNumber - 1, this.orderOfGames.gameSequence[this.gameNumber - 2]);
        this.showMouseRetry = true;

        // this.gameSequence(3);
        break;
        // parkinglot
      case 5:
        if (this.seconds > (this.estimationOfResults.GP.GSD - this.estimationOfResults.GP.TtDSOGP)) {
          this.showDialog = true;
          this.gameNumber = 5;
        }
        this.showMouseRetry = true;

        // this.uninitializeGames(3);

        // this.createGame(this.$window.nogic, { language: 'en', level: 3 }); 
        break;
      case 6:

        // this.uninitializeGames(5);
        this.gamesService.EndTimeInLastGame(this.secondsleft);
        this.gamesService.TotalTimeFOrLastGame(this.estimationOfResults.GP.GSD - this.gameSecSum);
        this.gamesService.gameStatistic();
        this.gameNumber = 5;
        this.stateChange('home');
        break;
      default:
        this.gameNumber = 5;
        break;
    }
  }

  // gameSequence(numb) {
  //   if (this.orderOfGames.gameSequence[numb] === 'tower') {
  //     this.gameBefore = 'tower';
  //     this.createGame(this.$window.nogic2, { language: 'en', noOfRings: 4 });
  //   }

  //   if (this.orderOfGames.gameSequence[numb] === 'mousetrap') {
  //     this.gameBefore = 'mousetrap';
  //     this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'false' });
  //   }

  //   if (this.orderOfGames.gameSequence[numb] === 'mazerace') {
  //     this.gameBefore = 'mazerace';
  //     this.createGame(this.$window.nogic4, { language: 'en', level: 2 });
  //   }
  // }

  reloadPage() {
    // if (localStorage.getItem('gamePage') == null) {
    //   localStorage.setItem('gamePage', location.pathname);
    // } else {
    //   localStorage.setItem('gamePageSecond', location.pathname);
    // }
    // this.$document[0].getElementById('parkinglot').contentWindow.endGame();
    // this.$document[0].getElementById('tower').contentWindow.endGame();
    // this.$document[0].getElementById('mazerace').contentWindow.endGame();
    // this.$document[0].getElementById('mousetrap').contentWindow.endGame();
    // this.$document[0].getElementById('parkinglotLast').contentWindow.endGame();
    // this.uninitializeGames(this.gameNumber);
    this.removeListeners();
    this.$state.reload();
  }

  reloadPagePopup() {
    if (localStorage.getItem('gamePage') == null) {
      localStorage.setItem('gamePage', location.pathname);
    } else {
      localStorage.setItem('gamePageSecond', location.pathname);
    }
    this.uninitializeGames(this.gameNumber - 1);
    this.removeListeners();
    this.$state.reload();
  }

  uninitializeGames(numb) {
    if (localStorage.getItem('gamePageSecond') !== null) {
      this.orderOfGames.level[numb + 1] = this.randomInteger(1, 10);
    }
    if (numb === 5) { numb = 0; }
    switch (this.orderOfGames.gameSequence[numb]) {
      case 'parkinglot': this.$window.nogic.uninitialize(); break;
      case 'tower': this.$window.nogic2.uninitialize(); break;
      case 'mousetrap': this.$window.nogic3.uninitialize(); break;
      case 'mazerace': this.$window.nogic4.uninitialize(); break;
      default:
        break;
    }
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
      this.gamesService.setMute(0);
    } else {
      audio.pause();
      this.gameScoreValue.muteMusic = 1;
      this.gamesService.setMute(1);
    }
    this.sound = !this.sound;
  }

  // createGame(initializer, options) {
  //   const wrapper = this.$document[0].getElementById('main-game-wrapper');
  //   const children = wrapper.childNodes;
  //   for (let i = 0; i < children.length; i += 1) {
  //     if (children[i].nodeType === this.$window.Node.ELEMENT_NODE) {
  //       wrapper.removeChild(children[i]);
  //     }
  //   }
  //   const holder = this.$document[0].createElement('div');
  //   wrapper.appendChild(holder);
  //   const data = initializer.initialize(holder, options);
  //   this.gamesService.setGameStatus(data);
  //   this.$document[0].getElementById('mazerace-id').focus();
  // }

  checkDataInGame(name) {
    this.gameData[0] = this.$document[0].getElementById(name).contentWindow.x;

    if (this.gameData[0] === undefined) {
      setTimeout(this.$document[0].getElementById(name).contentWindow.getGameResult(), 1000);
      this.gameData[0] = this.$document[0].getElementById(name).contentWindow.x;
      if (this.gameData[0] === undefined) {
        this.gameData[0] = 0;
      } else {
        this.gameData[1] = this.$document[0].getElementById(name).contentWindow.y;
        this.gameData[2] = this.$document[0].getElementById(name).contentWindow.z;
        this.gameData[3] = this.$document[0].getElementById(name).contentWindow.w;
        this.gameData[4] = this.$document[0].getElementById(name).contentWindow.q;
      }
    } else {
      this.gameData[0] = this.$document[0].getElementById(name).contentWindow.y;
      this.gameData[1] = this.$document[0].getElementById(name).contentWindow.z;
      this.gameData[2] = this.$document[0].getElementById(name).contentWindow.w;
      this.gameData[3] = this.$document[0].getElementById(name).contentWindow.q;
    }
    console.log(this.gameData[0], this.gameData[1], this.gameData[2], this.gameData[3], this.gameData[4]);
    // console.log(duration, noOfMoves, instructionsClickCount, win, firstMoveTime);
  }

  testChange() {
    this.stateChange('home');
    // switch (this.gameNumber) {
    //   case 1:
    //     this.checkDataInGame('parkinglot');
    //     this.changeGame(this.gameNumber, 'parkinglot');
    //     break;
    //   case 2:
    //     this.checkDataInGame('tower');
    //     this.changeGame(this.gameNumber, 'tower');
    //     break;
    //   case 3:
    //     this.checkDataInGame('mazerace');
    //     this.changeGame(this.gameNumber, 'mazerace');
    //     break;
    //   case 4:
    //     this.checkDataInGame('mousetrap');
    //     this.changeGame(this.gameNumber, 'mousetrap');
    //     break;
    //   default:
    //     break;
    // }
  }

  changeGame(number, name) {
    // dropgame
    const wrapper = this.$document[0].getElementById(name);
    wrapper.parentNode.removeChild(wrapper);

    this.showGame[number - 1] = true;
    this.widthGame[number - 1] = '0%';

    // this.gameNumber += 1;
    this.showGame[number] = false;
    this.widthGame[number] = '100%';
  }

  reloadGame(name) {
    this.$document[0].getElementById(name).contentWindow.endGame();
    this.$document[0].getElementById(name).contentWindow.startGame();
  }

  restartMosetrap() {
    if (this.showGame[5] === false) {
      this.$document[0].getElementById('mousetrap1').contentWindow.endGame();
      this.$document[0].getElementById('mousetrap1').contentWindow.startGame();

      for (let index = 0; index < this.orderOfGames.gameSequence.length; index++) {
        if (this.orderOfGames.gameSequence[this.index] === 'mousetrap') {
          this.showGame[index] = false;
          this.widthGame[index] = '1000%';

          this.showGame[5] = true;
          this.widthGame[5] = '0%';
        }
      }
    } else {
      this.$document[0].getElementById('mousetrap').contentWindow.endGame();
      this.$document[0].getElementById('mousetrap').contentWindow.startGame();
  
      for (let index = 0; index < this.orderOfGames.gameSequence.length; index++) {
  
        if (this.orderOfGames.gameSequence[this.index] === 'mousetrap') {
          this.showGame[index] = true;
          this.widthGame[index] = '0%';

          this.showGame[5] = false;
          this.widthGame[5] = '100%';
        }
      }
    }
    // this.gamesService.getGameResultMazerace(this.$window.nogic3);
    // this.$window.nogic3.uninitialize();
    //this.createGame(this.$window.nogic3, { language: 'en', skipInstructions: 'true' });
  }
  restartMazerace() {
    if (this.showGame[6] === false) {
      this.$document[0].getElementById('mazerace1').contentWindow.endGame();
      this.$document[0].getElementById('mazerace1').contentWindow.startGame();

      for (let index = 0; index < this.orderOfGames.gameSequence.length; index++) {

        if (this.orderOfGames.gameSequence[this.index] === 'mazerace') {
          this.showGame[index] = false;
          this.widthGame[index] = '100%';

          this.showGame[6] = true;
          this.widthGame[6] = '0%';
        }
      // this.$window.nogic4.uninitialize();
      //this.createGame(this.$window.nogic4, { language: 'en', skipInstructions: 'true', level: 2 });
      }
    } else {
      this.$document[0].getElementById('mazerace').contentWindow.endGame();
      this.$document[0].getElementById('mazerace').contentWindow.startGame();

      for (let index = 0; index < this.orderOfGames.gameSequence.length; index++) {

        if (this.orderOfGames.gameSequence[this.index] === 'mazerace') {
          this.showGame[index] = true;
          this.widthGame[index] = '0%';

          this.showGame[6] = false;
          this.widthGame[6] = '100%';
        }
      // this.$window.nogic4.uninitialize();
      //this.createGame(this.$window.nogic4, { language: 'en', skipInstructions: 'true', level: 2 });
      }
    }
  }

  checkEndGame(name) {
    this.gameData[0] = this.$document[0].getElementById(name).contentWindow.x;

    if (this.gameData[0] !== undefined) {
      this.gameData[1] = this.$document[0].getElementById(name).contentWindow.y;
      this.gameData[2] = this.$document[0].getElementById(name).contentWindow.z;
      this.gameData[3] = this.$document[0].getElementById(name).contentWindow.w;
      this.gameData[4] = this.$document[0].getElementById(name).contentWindow.q;

      this.gameEnded(this.gameData[0], this.gameData[1], this.gameData[2], this.gameData[3], this.gameData[4]);

      this.gameData = [0, 0, 0, false, 0];
    } else {
      this.gameData[0] = 0;
    }
  }
}

GamesController.$inject = ['$translate', '$state', 'connection', '$document', '$interval', '$scope', '$window', 'gamesService', 'parkingLotService', 'towerService', 'mouseGameService', 'mazeraceService', 'skipService', 'gameScoreValue', 'orderOfGames', 'helperService', 'estimationOfResults'];
export default GamesController;
