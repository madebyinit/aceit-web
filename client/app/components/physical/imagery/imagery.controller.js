class ImageryController {
  constructor(connection, $timeout, $state, $rootScope) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.$state = $state;
    this.$rootScope = $rootScope;
  }

  $onInit() {
    this._getWord();
  }

  _getWord() {
    this.connection.getData().then(res => {
      if (_.get(res, "imagery")) {
        this.$timeout(() => {
          this.imageryWord = _.get(res, "imagery");
        }, 0);
      }
    });
  }

  // goSummary(){
  //     debugger;
  //       this.showToolsDialog = true;
  //   this.$state.go('summary');
  // }

  saveWord(val) {
    this.imageryWord = val;
    this.connection.saveData(val, "imagery").then(
      res => {
        this.$timeout(() => {
          this.showImageryDialog = false;
          this._getWord();
        }, 0);
      },
      error => {
        console.log(error);
      }
    );
  }
}

ImageryController.$inject = ["connection", "$timeout", "$state", "$rootScope"];
export default ImageryController;
