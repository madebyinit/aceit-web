class ImageryController {
  constructor(connection, $timeout, $state, $rootScope, $window) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.isMobile = ($window.innerWidth < 480);
    this.openedModal = null;
  }
  $onInit() {
    this._getWord();
  }
  closeModal() {
    this.openedModal = null;
  }
  openModal(v) {
    this.openedModal = v;
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
ImageryController.$inject = ["connection", "$timeout", "$state", "$rootScope", "$window"];
export default ImageryController;