class dialogElementGameController {
  constructor($timeout, $scope, connection) {
    this.$timeout = $timeout;
    this.$scope = $scope;
    this.connection = connection;
    // this.buttonCheck = false;
  }

  $onInit() {
    this.watchChange = this.$scope.$watch(() => this.showDialog, (newVal) => {
      if (newVal) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      } else if (newVal === false) {
        document.getElementsByTagName('body')[0].style.overflow = '';
      }
    });
  }

  $onDestroy() {
    // this.watchChange();
    document.getElementsByTagName('body')[0].style.overflow = '';
  }

  returnValueFn(val) {
    this.returnValue({ val });
  }

  returnValueFn2(val) {
    if (val === 'goaceit') {
      this.connection.saveData(true, 'goaceitOn');
    }
    this.returnValue2({ val });
  }

  changeButton() {
    this.ButtonCheck = true;
  }
}

dialogElementGameController.$inject = ['$timeout', '$scope', 'connection'];
export default dialogElementGameController;
