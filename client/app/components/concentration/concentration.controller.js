class ConcentrationController {
  constructor(connection,$timeout,$state) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.$state = $state;
  }

  $onInit(){
    this._getWord();
  }

  _getWord(){
    this.connection.getUserPromise().then((res)=>{
      this.user = res;
      this._checkStateComplete();
      if(_.get(res,'concentration')){
        this.$timeout(()=>{
          this.concentrationWord = _.get(res,'concentration');
        },0);
      }
    })
  }

  _checkStateComplete(){
    if(_.get(this.user,'concentrationComplete')){
      this.$timeout(()=>{
        this.concentrationComplete = true;
      },0)
    }else{
      this._saveStateComplete();
    }
  }

  goToSummary(){
    this.$state.go('summary');
  }

  _saveStateComplete(){
    this.$timeout(()=>{
      this.concentrationComplete = true;
      this.connection.saveData(this.concentrationComplete,'concentrationComplete');
    },);
  }

  saveWord(val){
    debugger;
    this.concentrationWord = val;
    this.connection.saveData(val,'concentration').then((res)=>{
      this.showDialog = false;
      this._getWord();
    },(error)=>{
      console.log(error);
    })
  }
}

ConcentrationController.$inject = ['connection','$timeout','$state'];
export default ConcentrationController;
