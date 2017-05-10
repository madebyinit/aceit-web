class PositiveThinkingController {
  constructor(connection,$timeout,$state) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.$state = $state;
  }

  $onInit(){
    this.positiveComplete = false;
    this._getUserData();
  }

  _getUserData(){
    this.connection.getUserPromise().then((res)=>{
      if(_.get(res,'positiveComplete')){
        this.$timeout(()=>{
          this.positiveComplete = true;
        },0)
      }else{
        this._saveStateComplete();
      }
    })
  }

  goToSummary(){
    this.$state.go('summary');
  }

  _saveStateComplete(){
    this.$timeout(()=> {
      this.positiveComplete = true;
      this.connection.saveData(this.positiveComplete,'positiveComplete');
    },0);
  }

  closeDialog(){
    this.showSticky = false;
  }
}

PositiveThinkingController.$inject = ['connection','$timeout','$state'];
export default PositiveThinkingController;
