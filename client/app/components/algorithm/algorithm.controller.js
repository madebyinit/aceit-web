class AlgorithmController {
  constructor($translate,$document,$timeout, $interval,connection, $scope,orderOfGames,estimationOfResults,helperService) {
    'ngInject';
    this.$translate = $translate;
    this.$document = $document;
    this.$timeout = $timeout;
    this.connection = connection;
    this.$scope = $scope;
    this.orderOfGames = orderOfGames;
    this.estimationOfResults = estimationOfResults;
    this.helperService = helperService;
    this.listTopics = ["№","Low Confidence","Bad Time Man","Perfectionism","Neg Think","Lack Ricuz","Impulsivity","Slow Starter","Panic","Frustration"]
  }

  $onInit(){
    console.log(this.estimationOfResults);
    this.getUserData();
    console.log(this.orderOfGames);
    this.helperService.gameSequence();
    this.helperService.Results();

    this.keyParkinglotTableName = Object.keys(this.estimationOfResults.parkinglot);

    this.keyNIA = Object.keys(this.estimationOfResults.parkinglot.NIA);
    this.keySGD = Object.keys(this.estimationOfResults.parkinglot.SGD);
    this.keySkip = Object.keys(this.estimationOfResults.parkinglot.Skip);
    this.keyIB = Object.keys(this.estimationOfResults.parkinglot.IB);
    this.keyTM = Object.keys(this.estimationOfResults.parkinglot.TM);
  }

  removeAllListeners() {

  }

  $onDestroy(){
    this.removeAllListeners();
  }

  getUserData(){
    this.connection.getData().then((res)=>{
      this.user = res;
      this._userInit();
    })
  }

  _userInit(){
    if(this.user && this.user.name){
      this.userTitle = this.$translate.instant('home.you_getting_ready',{user: this.user.name});
      this.$scope.$apply();
    }
  }
}
export default AlgorithmController;
