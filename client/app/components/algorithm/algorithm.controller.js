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
    this.gameNowCheked = "parkinglot";
    this.showGame = false;
  }

  $onInit(){
    console.log(this.estimationOfResults);
    this.getUserData();
    console.log(this.orderOfGames);
    
    if (this.estimationOfResults.parkinglot = this.estimationOfResults.tower ){
      console.log("TESTS")
      this.helperService.gameSequence();
      this.helperService.Results();
    }

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

  changeView(game) {
    if (game == null){ 
      this.showGame = true 
    }else{ 
      this.showGame = false
    };

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

  changeGameOrder(sign,number){
    let a;
    let b;

    if (sign == "-"){
      console.log('TEST1');
      a = this.orderOfGames.gameSequence[number];
      b = this.orderOfGames.gameSequence[number+1];

      this.orderOfGames.gameSequence[number] = b;
      this.orderOfGames.gameSequence[number+1] = a;
    }else{
      console.log('TEST2');
      a = this.orderOfGames.gameSequence[number];
      b = this.orderOfGames.gameSequence[number-1];

      this.orderOfGames.gameSequence[number] = b;
      this.orderOfGames.gameSequence[number-1] = a;
    }

  }

  saveData(){
    console.log(this.estimationOfResults);
    console.log(this.orderOfGames.gameSequence)
    console.log(this.orderOfGames.level)
    this.orderOfGames.gameSequence
  }

  _userInit(){
    if(this.user && this.user.name){
      this.userTitle = this.$translate.instant('home.you_getting_ready',{user: this.user.name});
      this.$scope.$apply();
    }
  }
}
export default AlgorithmController;
