class ImageryController {
  constructor(connection,$timeout) {
    this.connection = connection;
    this.$timeout = $timeout;
  }

  $onInit(){
    this._getWord();
  }

  _getWord(){
    this.connection.getData().then((res)=>{
      if(_.get(res,'imagery')){
        this.$timeout(()=>{
          this.imageryWord = _.get(res,'imagery');
        },0);
      }
    })
  }

  saveWord(val){
    let data = {imagery:val};
    this.connection.saveData(data).then((res)=>{
      this.showDialog = false;
      this._getWord();
    },(error)=>{
      console.log(error);
    })
  }
}

ImageryController.$inject = ['connection','$timeout'];
export default ImageryController;
