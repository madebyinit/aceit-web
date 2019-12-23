import angular from "angular";

class GamesController {
  constructor(
    $translate,
    $state,
    connection,
    $document,
    $interval,
    $scope,
    $window,
    gamesService,
    parkingLotService,
    towerService,
    mouseGameService,
    mazeraceService,
    skipService,
    gameScoreValue,
    orderOfGames,
    helperService,
    estimationOfResults
  ) {
    this.$translate = $translate;
    this.$state = $state;
    this.$document = $document;
    this.$window = $window;
    this.user = {};
    this.connection = connection;
    this.firstStart = false;
    this.timeRemain = "00:00";
    this.estimationOfResults = estimationOfResults;
    this.seconds = this.estimationOfResults.GP.GSD;
    this.secondsleft = 0;
    this.gameSecSum = 0;
    this.$interval = $interval;
    this.gameNumber = 0;
    this.showWindow = false;
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
    this.gameBefore = "";
    this.showMouseRetry = true;
    this.showMazeRetry = true;
    this.duration = 0;
    this.instructionsClick = 0;
    this.starCheck = true;
    this.classes = ["red", "green", "blue"];
    this.showGame = [false, true, true, true, true, true, true];
    this.widthGame = ["100%", "0%", "0%", "0%", "0%", "0%", "0%"];
    this.gameData = [0, 0, 0, false, 0];
    this.checkInWichGame = true;
    this.Mashtab = {};
    this.secondsLeftForLastGame = 0;
    this.winCheck = [false, false, false, false];
    this.changeState = "home";
    this.mouseButtonChecker = 0;
    this.videoPopupCheck = true;
    this.BeforeVideoPopupCheck = true;
  }

  $onInit() {
    this.getUserData();

    if (localStorage.getItem("videoPageFirst")) {
      this.BeforeVideoPopupCheck = false;
      this.videoPopupCheck = false;
      this.showWindow = true;
    }

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
      selfAssessment: 0
    };

    this.gamesService.setgamesSuccessfullyCompleted(0);
    this.gamesService.setSelfassestment(10);

    this.$scope.$on("$locationChangeStart", event => {
      event.preventDefault();
    });

    window.onkeydown = function() {
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
          console.log("DEFAULT");
          break;
      }
    };

    if (localStorage.getItem("gamePage") == null) {
      console.log("FIRST START");
      // alert('FIRST START');
      this.setGamesLvl(true);
      this.firstStart = false;
    } else if (localStorage.getItem("gamePageSecond") == null) {
      console.log("SECOND START");
      this.videoPopupCheck = false;
      this.changeState = "goaceit";
      // alert('SECOND START');
      this.setGamesLvl(true);
      const audio = this.$document[0].getElementById("backgroundMusic");
      audio.play();
      this.firstStart = true;
      this.showWindow = false;
      this.countdownTimer = this.$interval(this.startTimer, 1000);
    } else {
      console.log("THIRD START");
      this.videoPopupCheck = false;
      this.changeState = "goaceit";
      // alert('THIRD START');
      this.setGamesLvl(false);
      const audio = this.$document[0].getElementById("backgroundMusic");
      audio.play();
      this.firstStart = true;
      this.showWindow = false;
      this.countdownTimer = this.$interval(this.startTimer, 1000);
    }
    const gameStart = localStorage.getItem("gameStart");

    this.gameNumber = 1;
  }

  startTimer() {
    this.gameData[0] = this.$document[0].getElementById(
      "parkinglotLast"
    ).contentWindow.x;
    if (this.gameNumber === 5) {
      this.starCheck = false;
    }

    if (this.gameData[0] !== undefined && this.starCheck === true) {
      this.gameData[0] = 0;
    } else {
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
          this.timeRemain = "00:00";
          let timeLastGame = 0;

          let duration = this.gameData[0];
          let noOfMoves = this.gameData[1];
          let instructionsClickCount = this.gameData[2];
          let win = this.gameData[3];
          let firstMoveTime = this.gameData[4];
          if (
            this.orderOfGames.gameSequence[this.gameNumber - 1] ===
              "parkinglot" &&
            this.gameNumber === 5
          ) {
            this.$document[0]
              .getElementById("parkinglotLast")
              .contentWindow.getGameResult();

            duration = this.$document[0].getElementById("parkinglotLast")
              .contentWindow.x;
            if (duration !== undefined) {
              noOfMoves = this.$document[0].getElementById("parkinglotLast")
                .contentWindow.y;
              instructionsClickCount = this.$document[0].getElementById(
                "parkinglotLast"
              ).contentWindow.z;
              win = this.$document[0].getElementById("parkinglotLast")
                .contentWindow.w;
              firstMoveTime = this.$document[0].getElementById("parkinglotLast")
                .contentWindow.q;
            } else {
              duration = 0;
            }
          } else {
            this.$document[0]
              .getElementById(
                this.orderOfGames.gameSequence[this.gameNumber - 1]
              )
              .contentWindow.getGameResult();

            duration = this.$document[0].getElementById(
              this.orderOfGames.gameSequence[this.gameNumber - 1]
            ).contentWindow.x;
            if (duration !== undefined) {
              noOfMoves = this.$document[0].getElementById(
                this.orderOfGames.gameSequence[this.gameNumber - 1]
              ).contentWindow.y;
              instructionsClickCount = this.$document[0].getElementById(
                this.orderOfGames.gameSequence[this.gameNumber - 1]
              ).contentWindow.z;
              win = this.$document[0].getElementById(
                this.orderOfGames.gameSequence[this.gameNumber - 1]
              ).contentWindow.w;
              firstMoveTime = this.$document[0].getElementById(
                this.orderOfGames.gameSequence[this.gameNumber - 1]
              ).contentWindow.q;
            } else {
              duration = 0;
            }
          }
          this.secondsleft =
            this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
          switch (this.gameNumber) {
            case 1:
              this.gamesService.getGameResult(
                this.orderOfGames.gameSequence[this.gameNumber - 1],
                0,
                0,
                noOfMoves,
                instructionsClickCount,
                win,
                firstMoveTime
              );
              this.gamesService.EndTimeInGame("Game 1", this.user.admin);
              this.gamesService.gameStatistic(
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                this.user.admin
              );
              break;
            case 2:
              this.gamesService.getGameResult(
                this.orderOfGames.gameSequence[this.gameNumber - 1],
                0,
                0,
                noOfMoves,
                instructionsClickCount,
                win,
                firstMoveTime
              );
              this.gamesService.EndTimeInGame("Game 2", this.user.admin);
              this.gamesService.gameStatistic(
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                this.user.admin
              );
              break;
            case 3:
              this.gamesService.getGameResult(
                this.orderOfGames.gameSequence[this.gameNumber - 1],
                0,
                0,
                noOfMoves,
                instructionsClickCount,
                win,
                firstMoveTime
              );
              this.gamesService.EndTimeInGame("Game 3", this.user.admin);
              this.gamesService.gameStatistic(
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                this.user.admin
              );
              break;
            case 4:
              timeLastGame = this.estimationOfResults.GP.GSD - this.gameSecSum;
              this.gamesService.getGameResult(
                this.orderOfGames.gameSequence[this.gameNumber - 1],
                0,
                0,
                noOfMoves,
                instructionsClickCount,
                win,
                firstMoveTime
              );
              this.gamesService.TotalTimeFOrFourthGame(
                timeLastGame,
                this.user.admin
              );
              this.gamesService.gameStatistic(
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                this.user.admin
              );
              break;
            case 5:
              this.gamesService.getGameResult(
                "parkinglotLast",
                0,
                0,
                noOfMoves,
                instructionsClickCount,
                win,
                firstMoveTime
              );
              this.gamesService.EndTimeInLastGame(
                this.estimationOfResults.GP.GSD - this.gameSecSum,
                this.user.admin
              );
              this.gamesService.TotalTimeFOrLastGame(
                this.estimationOfResults.GP.GSD - this.gameSecSum,
                this.user.admin
              );
              this.gamesService.gameStatistic(
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                this.user.admin
              );
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
  }

  setGamesLvl(bolean) {
    // this.orderOfGames.level[0]
    // this.orderOfGames.gameSequence
    if (bolean) {
      document.getElementById(
        "parkinglot"
      ).contentWindow.lvl = this.orderOfGames.level[0];
      document.getElementById(
        "tower"
      ).contentWindow.lvl = this.orderOfGames.level[1];
      document.getElementById(
        "parkinglotLast"
      ).contentWindow.lvl = this.orderOfGames.level[4];
    } else {
      document.getElementById(
        "parkinglot"
      ).contentWindow.lvl = this.randomInteger(1, 10);
      document.getElementById("tower").contentWindow.lvl = this.randomInteger(
        1,
        10
      );
      document.getElementById(
        "parkinglotLast"
      ).contentWindow.lvl = this.randomInteger(1, 10);
    }
  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  getUserData() {
    this.connection.getData().then(res => {
      this.user = res;
      console.log(this.user);

      // this.helperService.gameSequence();
      // this.helperService.feedbackCounter();
      // this.helperService.Results();
      // this.helperService.feedbackSentences();
      // this.helperService.SuggestedTools();
      // this.helperService.FeedbackChange();
      // this.seconds = this.estimationOfResults.GP.GSD;
      // if (localStorage.getItem('Summary') == null) {
      //   this.gameSummary = this.user.Summary;
      // }
      if (localStorage.getItem("gamePage") == null && this.user.admin) {
        alert("FIRST START");
      } else if (
        localStorage.getItem("gamePageSecond") == null &&
        this.user.admin
      ) {
        alert("SECOND START");
      } else if (this.user.admin) {
        alert("THIRD START");
      }
      if (
        this.user.videoPageFirst != "undefined" &&
        this.user.videoPageFirst != null
      ) {
        localStorage.setItem("videoPageFirst", location.pathname);
      }
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

      this._userInit();
    });
  }

  _userInit() {
    if (this.user && this.user.name) {
      this.userTitle = this.$translate.instant("home.you_getting_ready", {
        user: this.user.name
      });
      this.$scope.$apply();
    }
  }

  adminAdd() {
    this.connection.saveData(true, "admin");
  }

  $onDestroy() {
    this.removeListeners();
  }

  gameEnded(duration, noOfMoves, instructionsClickCount, win, firstMoveTime) {
    if (
      !win &&
      this.orderOfGames.gameSequence[this.gameNumber - 1] === "tower"
    ) {
      win = true;
    }

    if (win) {
      this.gameSuccComp++;
    }

    if (this.orderOfGames.gameSequence[this.gameNumber - 1] === "mousetrap") {
      this.mousewin = win;
      if (this.mouseButtonChecker < 2) {
        this.showMouseRetry = win;
      }
    }
    if (this.orderOfGames.gameSequence[this.gameNumber - 1] === "mazerace") {
      this.mousewin = win;
      this.showMazeRetry = win;
    }
    if (
      this.orderOfGames.gameSequence[this.gameNumber - 1] === "mousetrap" &&
      this.mousewin === false
    ) {
      this.duration += duration;
      this.instructionsClick += instructionsClickCount;
    } else if (
      this.orderOfGames.gameSequence[this.gameNumber - 1] === "mazerace" &&
      this.mousewin === false
    ) {
      this.duration += duration;
      this.instructionsClick += instructionsClickCount;
    } else {
      this.secondsleft =
        this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
      this.gameSecSum += this.secondsleft;

      this.winCheck[this.gameNumber - 1] = true;
      this.showMouseRetry = true;
      this.duration += duration;
      this.instructionsClick += instructionsClickCount;
      switch (this.orderOfGames.gameSequence[this.gameNumber - 1]) {
        case "parkinglot":
          if (this.gameNumber === 1) {
            this.parkingLotService.end(
              duration,
              noOfMoves,
              instructionsClickCount,
              win,
              firstMoveTime,
              this.user.admin
            );
          } else {
            this.parkingLotService.endLastGame(
              duration,
              noOfMoves,
              instructionsClickCount,
              win,
              firstMoveTime,
              this.user.admin
            );
            // this.gamesService.EndTimeInLastGame(this.estimationOfResults.GP.GSD - this.gameSecSum);
          }
          break;
        case "tower":
          this.towerService.end(
            duration,
            noOfMoves,
            instructionsClickCount,
            win,
            firstMoveTime,
            this.user.admin
          );
          break;
        case "mousetrap":
          this.mouseGameService.end(
            this.secondsleft * 1000,
            noOfMoves,
            this.instructionsClick,
            win,
            firstMoveTime,
            this.user.admin
          );
          break;
        case "mazerace":
          this.mazeraceService.end(
            this.secondsleft * 1000,
            noOfMoves,
            this.instructionsClick,
            win,
            firstMoveTime,
            this.user.admin
          );
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
          this.changeGame(
            this.gameNumber - 1,
            this.orderOfGames.gameSequence[this.gameNumber - 2]
          );
          break;
        // mousetrap
        case 3:
          this.changeGame(
            this.gameNumber - 1,
            this.orderOfGames.gameSequence[this.gameNumber - 2]
          );
          break;
        // moserace
        case 4:
          this.changeGame(
            this.gameNumber - 1,
            this.orderOfGames.gameSequence[this.gameNumber - 2]
          );
          this.secondsleft =
            this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
          this.gameSecSum += this.secondsleft;
          this.gameBeforeLastTime = this.secondsleft;
          break;
        // parkinglot
        case 5:
          this.changeGame(
            this.gameNumber - 1,
            this.orderOfGames.gameSequence[this.gameNumber - 2]
          );
          this.secondsLeftForLastGame = this.seconds;
          break;
        case 6:
          this.gamesService.TotalTimeFOrLastGame(
            this.secondsLeftForLastGame,
            this.user.admin
          );
          this.gamesService.gameStatistic(
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            this.user.admin
          );
          this.stateChange(this.changeState);
          if (this.changeState == "goaceit") {
            this.connection.saveData(true, "goaceitOn");
          }
          break;
        default:
          break;
      }
    }
  }

  clearStorage() {
    localStorage.removeItem("gamePage");
    this.firstStart = false;
  }

  closeModal(val) {
    const audio = this.$document[0].getElementById("backgroundMusic");
    audio.play();
    this.gameScoreValue.selfAssessment = val;
    this.gamesService.setSelfassestment(val);
    this.showWindow = !this.showWindow;
    this.countdownTimer = this.$interval(this.startTimer, 1000);
  }

  skipGame() {
    this.showMazeRetry = true;

    let duration = 0;
    let noOfMoves = 0;
    let instructionsClickCount = 0;
    let win = false;
    let firstMoveTime = 0;

    if (
      this.orderOfGames.gameSequence[this.gameNumber - 1] === "parkinglot" &&
      this.gameNumber === 5
    ) {
      this.$document[0]
        .getElementById("parkinglotLast")
        .contentWindow.getGameResult();

      duration = this.$document[0].getElementById("parkinglotLast")
        .contentWindow.x;
      if (duration !== undefined) {
        noOfMoves = this.$document[0].getElementById("parkinglotLast")
          .contentWindow.y;
        instructionsClickCount = this.$document[0].getElementById(
          "parkinglotLast"
        ).contentWindow.z;
        win = this.$document[0].getElementById("parkinglotLast").contentWindow
          .w;
        firstMoveTime = this.$document[0].getElementById("parkinglotLast")
          .contentWindow.q;
      } else {
        duration = 0;
      }
    } else {
      this.$document[0]
        .getElementById(this.orderOfGames.gameSequence[this.gameNumber - 1])
        .contentWindow.getGameResult();

      duration = this.$document[0].getElementById(
        this.orderOfGames.gameSequence[this.gameNumber - 1]
      ).contentWindow.x;
      if (duration !== undefined) {
        noOfMoves = this.$document[0].getElementById(
          this.orderOfGames.gameSequence[this.gameNumber - 1]
        ).contentWindow.y;
        instructionsClickCount = this.$document[0].getElementById(
          this.orderOfGames.gameSequence[this.gameNumber - 1]
        ).contentWindow.z;
        win = this.$document[0].getElementById(
          this.orderOfGames.gameSequence[this.gameNumber - 1]
        ).contentWindow.w;
        firstMoveTime = this.$document[0].getElementById(
          this.orderOfGames.gameSequence[this.gameNumber - 1]
        ).contentWindow.q;
      } else {
        duration = 0;
      }
    }

    switch (this.gameNumber) {
      case 1:
        this.secondsleft = this.estimationOfResults.GP.GSD - this.seconds;
        this.gameSecSum += this.secondsleft;
        this.gamesService.getGameResult(
          this.orderOfGames.gameSequence[this.gameNumber - 1],
          0,
          0,
          noOfMoves,
          instructionsClickCount,
          win,
          firstMoveTime,
          this.user.admin
        );
        this.skipService.GameSkip(
          this.secondsleft,
          this.orderOfGames.gameSequence[0],
          this.estimationOfResults,
          this.user.admin
        );
        this.duration = 0;
        break;
      case 2:
        this.secondsleft =
          this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gamesService.getGameResult(
          this.orderOfGames.gameSequence[this.gameNumber - 1],
          0,
          0,
          noOfMoves,
          instructionsClickCount,
          win,
          firstMoveTime,
          this.user.admin
        );
        this.skipService.GameSkip(
          this.secondsleft,
          this.orderOfGames.gameSequence[1],
          this.estimationOfResults,
          this.user.admin
        );
        this.duration = 0;
        break;
      case 3:
        this.secondsleft =
          this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gamesService.getGameResult(
          this.orderOfGames.gameSequence[this.gameNumber - 1],
          0,
          0,
          noOfMoves,
          instructionsClickCount,
          win,
          firstMoveTime,
          this.user.admin
        );
        this.skipService.GameSkip(
          this.secondsleft,
          this.orderOfGames.gameSequence[2],
          this.estimationOfResults,
          this.user.admin
        );
        this.duration = 0;
        break;
      case 4:
        this.secondsleft =
          this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gameBeforeLastTime = this.secondsleft;
        const timeLastGame =
          Math.ceil(this.duration / 1000) +
          (this.estimationOfResults.GP.GSD - this.gameSecSum);
        this.secondsLeftForLastGame = timeLastGame;
        this.gamesService.getGameResult(
          this.orderOfGames.gameSequence[this.gameNumber - 1],
          0,
          0,
          noOfMoves,
          instructionsClickCount,
          win,
          firstMoveTime,
          this.user.admin
        );
        this.skipService.GameSkip(
          this.secondsleft,
          this.orderOfGames.gameSequence[3],
          this.estimationOfResults,
          this.user.admin
        );
        this.duration = 0;
        break;
      case 5:
        this.secondsleft =
          this.estimationOfResults.GP.GSD - this.seconds - this.gameSecSum;
        this.gameSecSum += this.secondsleft;
        this.gamesService.getGameResult(
          "parkinglotLast",
          0,
          0,
          noOfMoves,
          instructionsClickCount,
          win,
          firstMoveTime,
          this.user.admin
        );
        break;
      default:
        break;
    }

    this.gameNumber++;

    switch (this.orderOfGames.gameSequence[this.gameNumber - 2]) {
      case "parkinglot":
        if (this.gameNumber === 6) {
          this.gamesService.EndTimeInLastGame(
            this.secondsleft,
            this.user.admin
          );
          this.gamesService.TotalTimeFOrLastGame(
            this.secondsLeftForLastGame,
            this.user.admin
          );
          this.gamesService.gameStatistic(
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            this.user.admin
          );
          this.gameNumber = 5;
          this.stateChange(this.changeState);
          if (this.changeState == "goaceit") {
            this.connection.saveData(true, "goaceitOn");
          }
        } else {
          this.changeGame(
            this.gameNumber - 1,
            this.orderOfGames.gameSequence[this.gameNumber - 2]
          );
          if (localStorage.getItem("gamePageSecond") !== null) {
            this.orderOfGames.level[1] = this.randomInteger(1, 10);
          }
        }
        // parkinglotLast

        break;
      // tower
      case "tower":
        this.changeGame(
          this.gameNumber - 1,
          this.orderOfGames.gameSequence[this.gameNumber - 2]
        );
        if (localStorage.getItem("gamePageSecond") !== null) {
          this.orderOfGames.level[1] = this.randomInteger(1, 10);
        }
        if (
          this.seconds >
            this.estimationOfResults.GP.GSD -
              this.estimationOfResults.GP.TtDSOGP &&
          this.gameNumber === 5
        ) {
          if (
            !this.winCheck[0] &&
            !this.winCheck[1] &&
            !this.winCheck[2] &&
            !this.winCheck[3]
          ) {
            this.showDialog = true;
          }
        }
        break;
      // mousetrap
      case "mousetrap":
        this.changeGame(
          this.gameNumber - 1,
          this.orderOfGames.gameSequence[this.gameNumber - 2]
        );
        this.showMouseRetry = true;
        if (
          this.seconds >
            this.estimationOfResults.GP.GSD -
              this.estimationOfResults.GP.TtDSOGP &&
          this.gameNumber === 5
        ) {
          if (
            !this.winCheck[0] &&
            !this.winCheck[1] &&
            !this.winCheck[2] &&
            !this.winCheck[3]
          ) {
            this.showDialog = true;
          }
        }
        break;
      // moserace
      case "mazerace":
        this.changeGame(
          this.gameNumber - 1,
          this.orderOfGames.gameSequence[this.gameNumber - 2]
        );
        this.showMazeRetry = true;
        if (
          this.seconds >
            this.estimationOfResults.GP.GSD -
              this.estimationOfResults.GP.TtDSOGP &&
          this.gameNumber === 5
        ) {
          if (
            !this.winCheck[0] &&
            !this.winCheck[1] &&
            !this.winCheck[2] &&
            !this.winCheck[3]
          ) {
            this.showDialog = true;
          }
        }
        break;
      default:
        this.gameNumber = 5;
        break;
    }
  }

  reloadPage() {
    this.removeListeners();
    this.$state.reload();
  }

  removeGame() {
    for (
      let index = this.gameNumber - 1;
      index < this.orderOfGames.gameSequence.length - 1;
      index++
    ) {
      this.$document[0]
        .getElementById(this.orderOfGames.gameSequence[index])
        .contentWindow.endGame();
      let wrapper = this.$document[0].getElementById(
        this.orderOfGames.gameSequence[index]
      );
      wrapper.parentNode.removeChild(wrapper);

      if (this.orderOfGames.gameSequence[index] === "mousetrap") {
        this.$document[0].getElementById("mousetrap1").contentWindow.endGame();
        wrapper = this.$document[0].getElementById("mousetrap1");
        wrapper.parentNode.removeChild(wrapper);
      }

      if (this.orderOfGames.gameSequence[index] === "mazerace") {
        this.$document[0].getElementById("mazerace1").contentWindow.endGame();
        wrapper = this.$document[0].getElementById("mazerace1");
        wrapper.parentNode.removeChild(wrapper);
      }
    }
  }

  reloadPagePopup() {
    if (localStorage.getItem("gamePage") == null) {
      localStorage.setItem("gamePage", location.pathname);
      this.connection.saveData("gamePage", "gamePage");
    } else {
      localStorage.setItem("gamePageSecond", location.pathname);
      this.connection.saveData("gamePageSecond", "gamePageSecond");
    }
    this.removeGame();
    this.removeListeners();
    this.$state.reload();
  }

  removeListeners() {
    this.$interval.cancel(this.countdownTimer);
    this.showWindow = false;
    this.soundChange();
    const wrapper = this.$document[0].getElementById("main-game-wrapper");
    const children = wrapper.childNodes;
    for (let i = 0; i < children.length; i++) {
      wrapper.removeChild(children[i]);
    }
  }

  stateChange(state) {
    if (state !== "videoPage") {
      if (localStorage.getItem("gamePage") == null) {
        localStorage.setItem("gamePage", location.pathname);
        this.connection.saveData("gamePage", "gamePage");
      } else {
        localStorage.setItem("gamePageSecond", location.pathname);
        this.connection.saveData("gamePageSecond", "gamePageSecond");
      }
    }

    this.removeListeners();
    this.$state.go(state);
  }

  soundChange() {
    const audio = this.$document[0].getElementById("backgroundMusic");
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

  checkDataInGame(name) {
    this.gameData[0] = this.$document[0].getElementById(name).contentWindow.x;

    if (this.gameData[0] === undefined) {
      setTimeout(
        this.$document[0].getElementById(name).contentWindow.getGameResult(),
        1000
      );
      this.gameData[0] = this.$document[0].getElementById(name).contentWindow.x;
      if (this.gameData[0] === undefined) {
        this.gameData[0] = 0;
      } else {
        this.gameData[1] = this.$document[0].getElementById(
          name
        ).contentWindow.y;
        this.gameData[2] = this.$document[0].getElementById(
          name
        ).contentWindow.z;
        this.gameData[3] = this.$document[0].getElementById(
          name
        ).contentWindow.w;
        this.gameData[4] = this.$document[0].getElementById(
          name
        ).contentWindow.q;
      }
    } else {
      this.gameData[0] = this.$document[0].getElementById(name).contentWindow.y;
      this.gameData[1] = this.$document[0].getElementById(name).contentWindow.z;
      this.gameData[2] = this.$document[0].getElementById(name).contentWindow.w;
      this.gameData[3] = this.$document[0].getElementById(name).contentWindow.q;
    }
  }

  changeGame(number, name) {
    // dropgame
    if (this.gameNumber < 6) {
      const wrapper = this.$document[0].getElementById(name);
      wrapper.parentNode.removeChild(wrapper);

      this.showGame[number - 1] = true;
      this.widthGame[number - 1] = "0%";
      this.showGame[number] = false;
      this.widthGame[number] = "100%";
    }
  }

  restartMosetrap() {
    this.mouseButtonChecker++;

    if (this.mouseButtonChecker === 2) {
      this.showMouseRetry = true;
    }

    if (this.showGame[5] === false) {
      for (
        let index = 0;
        index < this.orderOfGames.gameSequence.length;
        index++
      ) {
        if (this.orderOfGames.gameSequence[this.index] === "mousetrap") {
          this.showGame[index] = false;
          this.widthGame[index] = "100%";

          this.showGame[5] = true;
          this.widthGame[5] = "0%";
        }
      }
      this.$document[0].getElementById("mousetrap1").contentWindow.endGame();
      this.$document[0].getElementById("mousetrap1").contentWindow.startGame();
    } else {
      for (
        let index = 0;
        index < this.orderOfGames.gameSequence.length;
        index++
      ) {
        if (this.orderOfGames.gameSequence[this.index] === "mousetrap") {
          this.showGame[index] = true;
          this.widthGame[index] = "0%";

          this.showGame[5] = false;
          this.widthGame[5] = "100%";
        }
      }
      this.$document[0].getElementById("mousetrap").contentWindow.endGame();
      this.$document[0].getElementById("mousetrap").contentWindow.startGame();
    }
  }

  restartMazerace() {
    if (this.showGame[6] === false) {
      for (
        let index = 0;
        index < this.orderOfGames.gameSequence.length;
        index++
      ) {
        if (this.orderOfGames.gameSequence[this.index] === "mazerace") {
          this.showGame[index] = false;
          this.widthGame[index] = "100%";

          this.showGame[6] = true;
          this.widthGame[6] = "0%";
        }
      }
      this.$document[0].getElementById("mazerace1").contentWindow.endGame();
      this.$document[0].getElementById("mazerace1").contentWindow.startGame();
      // this.$document[0].getElementById('mazerace1').contentWindow.document.body.focus();
    } else {
      for (
        let index = 0;
        index < this.orderOfGames.gameSequence.length;
        index++
      ) {
        if (this.orderOfGames.gameSequence[this.index] === "mazerace") {
          this.showGame[index] = true;
          this.widthGame[index] = "0%";

          this.showGame[6] = false;
          this.widthGame[6] = "100%";
        }
      }
      this.$document[0].getElementById("mazerace").contentWindow.endGame();
      this.$document[0].getElementById("mazerace").contentWindow.startGame();
      // this.$document[0].getElementById('mazerace').contentWindow.document.body.focus();
    }
  }

  checkEndGame(name) {
    switch (name) {
      case "parkinglot":
        if (this.gameNumber > 1) {
          this.checkInWichGame = false;
        }

        if (this.checkInWichGame) {
          this.reqinGame(name);
        } else {
          this.reqinGame(`${name}Last`);
        }
        break;
      case "mousetrap":
        this.checkInWichGame = !this.checkInWichGame;
        if (this.checkInWichGame) {
          this.reqinGame(name);
        } else {
          this.reqinGame(`${name}1`);
        }
        break;
      case "mazerace":
        this.checkInWichGame = !this.checkInWichGame;
        if (this.checkInWichGame) {
          this.reqinGame(name);
        } else {
          this.reqinGame(`${name}1`);
        }
        break;

      default:
        this.reqinGame(name);
        break;
    }
  }

  reqinGame(name) {
    if (this.gameNumber < 6) {
      this.gameData[0] = this.$document[0].getElementById(name).contentWindow.x;

      if (this.gameData[0] !== undefined) {
        this.gameData[1] = this.$document[0].getElementById(
          name
        ).contentWindow.y;
        this.gameData[2] = this.$document[0].getElementById(
          name
        ).contentWindow.z;
        this.gameData[3] = this.$document[0].getElementById(
          name
        ).contentWindow.w;
        this.gameData[4] = this.$document[0].getElementById(
          name
        ).contentWindow.q;
        this.gameEnded(
          this.gameData[0],
          this.gameData[1],
          this.gameData[2],
          this.gameData[3],
          this.gameData[4]
        );

        this.$document[0].getElementById(name).contentWindow.x = undefined;
        this.$document[0].getElementById(name).contentWindow.y = 0;
        this.$document[0].getElementById(name).contentWindow.z = 0;
        this.$document[0].getElementById(name).contentWindow.w = false;
        this.$document[0].getElementById(name).contentWindow.q = false;

        this.gameData = [0, 0, 0, false, 0];
      } else {
        this.gameData[0] = 0;
      }
    }
  }

  startVideoPopup() {
    this.showWindow = false;
    this.BeforeVideoPopupCheck = false;
    this.videoPopupCheck = true;
    let seconds = 44;

    this.countdownTimer = this.$interval(() => {
      if (seconds > 30) {
        this.$document[0].getElementById("GameVideo").play();
      }

      if (seconds === 0) {
        this.$interval.cancel(this.countdownTimer);
        this.videoPopupCheck = false;
        this.showWindow = true;
      } else {
        seconds--;
      }
    }, 1000);
  }
}

GamesController.$inject = [
  "$translate",
  "$state",
  "connection",
  "$document",
  "$interval",
  "$scope",
  "$window",
  "gamesService",
  "parkingLotService",
  "towerService",
  "mouseGameService",
  "mazeraceService",
  "skipService",
  "gameScoreValue",
  "orderOfGames",
  "helperService",
  "estimationOfResults"
];
export default GamesController;
