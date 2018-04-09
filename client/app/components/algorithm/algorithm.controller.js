class AlgorithmController {
  constructor($translate,$document,$timeout, $interval,connection, $scope) {
    'ngInject';
    this.$translate = $translate;
    this.$document = $document;
    this.$timeout = $timeout;
    this.connection = connection;

  }

  $onInit(){

    this.getUserData();

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
