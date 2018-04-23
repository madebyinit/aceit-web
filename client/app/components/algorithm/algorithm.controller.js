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
    this.listTopics = ['№', 'Low Confidence', 'Bad Time Man', 'Perfectionism', 'Neg Think', 'Lack Ricuz', 'Impulsivity', 'Slow Starter', 'Panic', 'Frustration'];
    this.listTopicsOfBehavior = ['Number', 'Attribute Name', 'Feedback'];
    this.listTopicsOfUPDI = ['ID', 'UPDI', 'Feedback', 'Impact User Attributes'];
    this.gameNowCheked = 'parkinglot';
    this.showGame = false;
  }

  $onInit() {
    console.log(this.estimationOfResults);
    this.getUserData();
    console.log(this.orderOfGames);

    if (this.estimationOfResults.parkinglot === this.estimationOfResults.tower) {
      console.log('TESTS');
      this.helperService.gameSequence();
      this.helperService.Results();
    }
  }

  // removeAllListeners() {

  // }

  // $onDestroy() {
  //   this.removeAllListeners();
  // }

  getUserData() {
    this.connection.getData().then((res) => {
      this.user = res;

      this.estimationOfResults.parkinglot = this.user.estimationOfResults.parkinglot;
      this.estimationOfResults.mazerace = this.user.estimationOfResults.mazerace;
      this.estimationOfResults.mousetrap = this.user.estimationOfResults.mousetrap;
      this.estimationOfResults.tower = this.user.estimationOfResults.tower;
      this.estimationOfResults.parkingLotLast = this.user.estimationOfResults.parkingLotLast;
      this.estimationOfResults.gameEnd = this.user.estimationOfResults.gameEnd;
      this.estimationOfResults.GP = this.user.estimationOfResults.GP;


      this.orderOfGames.gameSequence = this.user.gameSequence;
      this.orderOfGames.level = this.user.level;
      this._userInit();
    });
  }
  changeFeedback(key) {
    this.estimationOfResults.GP.UBA[key] = !this.estimationOfResults.GP.UBA[key];
  }

  changeUPDI(key, param) {
    this.estimationOfResults.GP.UPDI[key][param] = !this.estimationOfResults.GP.UPDI[key][param];
  }

  changeView(game) {
    if (game == null) {
      this.showGame = true;
    } else {
      this.showGame = false;
    }

    this.gameNowCheked = game;
  }

  changeField(name, key, index, ev) {
    this.estimationOfResults[this.gameNowCheked][name][key][index] = parseInt(this.estimationOfResults[this.gameNowCheked][name][key][index]);
  }

  changeGameLvl(index, ev) {
    console.log(this.orderOfGames.level[index]);
    this.orderOfGames.level[index] = parseInt(this.orderOfGames.level[index]);
    console.log(this.orderOfGames.level[index]);
  }

  changeGameOrder(sign, number) {
    let a;
    let b;

    if (sign === '-') {
      console.log('TEST1');
      a = this.orderOfGames.gameSequence[number];
      b = this.orderOfGames.gameSequence[number + 1];

      this.orderOfGames.gameSequence[number] = b;
      this.orderOfGames.gameSequence[number + 1] = a;
    } else {
      console.log('TEST2');
      a = this.orderOfGames.gameSequence[number];
      b = this.orderOfGames.gameSequence[number - 1];

      this.orderOfGames.gameSequence[number] = b;
      this.orderOfGames.gameSequence[number - 1] = a;
    }
  }

  saveData() {
    // console.log(this.estimationOfResults,"TESTTSTSTTS");
    // console.log(this.orderOfGames.gameSequence);
    // console.log(this.orderOfGames.level);
    // this.orderOfGames.gameSequence;

    this.connection.saveData(this.orderOfGames.gameSequence, 'gameSequence');
    this.connection.saveData(this.orderOfGames.level, 'level');
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
