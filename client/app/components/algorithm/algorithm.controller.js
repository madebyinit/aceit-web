class AlgorithmController {
  constructor($translate, $document, $timeout, $interval, connection, $scope, orderOfGames, estimationOfResults, helperService) {
    'ngInject';

    this.$translate = $translate;
    this.$document = $document;
    this.$timeout = $timeout;
    this.connection = connection;
    this.$scope = $scope;
    this.orderOfGames = orderOfGames;
    this.estimationOfResults = estimationOfResults;
    this.helperService = helperService;
    // this.listTopics = ['№', 'Low Confidence', 'Bad Time Man', 'Perfectionism', 'Neg Think', 'Lack Ricuz', 'Impulsivity', 'Slow Starter', 'Panic', 'Frustration'];
    this.listTopics = ['№', 'Bad Time Man', 'Frustration', 'Impulsivity', 'Low Confidence', 'Lack Ricuz', 'Neg Think', 'Perfectionism', 'Panic', 'Slow Starter'];
    this.listTopicsOfBehavior = ['Number', 'Attribute Name', 'Feedback'];
    this.listTopicsOfUPDI = ['ID', 'UPDI', 'Feedback', 'Impact User Attributes'];
    this.gameNowCheked = 'parkinglot';
    this.showGame = false;
    this.showFeedback = false;
  }

  $onInit() {
    this.getUserData();

  }

  // removeAllListeners() {

  // }

  // $onDestroy() {
  //   this.removeAllListeners();
  // }

  getUserData() {
    this.connection.getData().then((res) => {
      this.user = res;
      if (this.estimationOfResults.feedbackCounter.LC === undefined) {
        this.helperService.feedbackCounter();
        this.helperService.feedbackSentences();
        this.helperService.gameSequence();
        this.helperService.Results();
        this.helperService.SuggestedTools();
      } else {
        this.estimationOfResults.parkinglot = this.user.estimationOfResults.parkinglot;
        this.estimationOfResults.mazerace = this.user.estimationOfResults.mazerace;
        this.estimationOfResults.mousetrap = this.user.estimationOfResults.mousetrap;
        this.estimationOfResults.tower = this.user.estimationOfResults.tower;
        this.estimationOfResults.parkingLotLast = this.user.estimationOfResults.parkingLotLast;
        this.estimationOfResults.gameEnd = this.user.estimationOfResults.gameEnd;
        this.estimationOfResults.GP = this.user.estimationOfResults.GP;
        this.estimationOfResults.Feedback = this.user.estimationOfResults.Feedback;
        this.estimationOfResults.SuggestPoints = this.user.estimationOfResults.SuggestPoints;
        this.estimationOfResults.feedbackCounter = this.user.estimationOfResults.feedbackCounter;

        this.orderOfGames.gameSequence = this.user.gameSequence;
        this.orderOfGames.level = this.user.level;
        this.orderOfGames.UPDI = this.user.UPDI;
      }
      console.log(this.user.estimationOfResults, "TESTS");
      console.log(this.estimationOfResults);
      this._userInit();
    });
  }
  changeFeedback(key) {
    this.estimationOfResults.GP.UBA[key] = !this.estimationOfResults.GP.UBA[key];
  }

  changeUPDI(key, param) {
    this.estimationOfResults.GP.UPDI[key][param] = !this.estimationOfResults.GP.UPDI[key][param];
  }

  changeUPDIinGame(key, keys) {
    this.orderOfGames.UPDI[key][keys] = !this.orderOfGames.UPDI[key][keys];
  }

  changeView(game) {
    this.showFeedback = false;
    if (game == null) {
      this.showGame = true;
    } else {
      this.showGame = false;
    }

    this.gameNowCheked = game;
  }

  changeToFeedback(game) {
    this.showGame = false;
    if (game == null) {
      this.showFeedback = true;
    } else {
      this.showFeedback = false;
    }

    this.gameNowCheked = game;
  }

  changeField(name, key, index, ev) {
    this.estimationOfResults[this.gameNowCheked][name][key][index] = parseInt(this.estimationOfResults[this.gameNowCheked][name][key][index]);
  }

  changeFeedbackField(keys, key, ev) {
    this.estimationOfResults.Feedback[keys][key] = this.estimationOfResults.Feedback[keys][key];
  }

  changeGameLvl(index, ev) {
    this.orderOfGames.level[index] = parseInt(this.orderOfGames.level[index]);
  }

  changeGameOrder(sign, number) {
    let a;
    let b;

    if (sign === '-') {
      a = this.orderOfGames.gameSequence[number];
      b = this.orderOfGames.gameSequence[number + 1];

      this.orderOfGames.gameSequence[number] = b;
      this.orderOfGames.gameSequence[number + 1] = a;
    } else {
      a = this.orderOfGames.gameSequence[number];
      b = this.orderOfGames.gameSequence[number - 1];

      this.orderOfGames.gameSequence[number] = b;
      this.orderOfGames.gameSequence[number - 1] = a;
    }
  }

  saveData() {
    this.connection.saveData(this.orderOfGames.gameSequence, 'gameSequence');
    this.connection.saveData(this.orderOfGames.level, 'level');
    this.connection.saveData(this.orderOfGames.UPDI, 'UPDI');
    this.connection.saveData(this.estimationOfResults, 'estimationOfResults');
  }

  _userInit() {
    if (this.user && this.user.name) {
      this.userTitle = this.$translate.instant('home.you_getting_ready', { user: this.user.name });
      this.$scope.$apply();
    }
  }
}
export default AlgorithmController;
