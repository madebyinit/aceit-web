class ConcentrationController {
  constructor(connection,$timeout) {
    this.connection = connection;
    this.$timeout = $timeout;
  }

  $onInit(){
    this._getWord();
  }

  _getWord(){
    this.connection.getData().then((res)=>{
      if(_.get(res,'concentration')){
        this.$timeout(()=>{
          this.concentrationWord = _.get(res,'concentration');
        },0);
      }
    })
  }

  saveWord(val){
    this.connection.saveData(val,'concentration').then((res)=>{
      this.showDialog = false;
      this._getWord();
    },(error)=>{
      console.log(error);
    })
  }
}

ConcentrationController.$inject = ['connection','$timeout'];
export default ConcentrationController;
