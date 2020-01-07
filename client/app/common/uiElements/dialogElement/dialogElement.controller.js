class dialogElementController {
  constructor($timeout, $scope) {
    this.$timeout = $timeout;
    this.$scope = $scope;
  }

  $onInit() {
    this.watchChange = this.$scope.$watch(
      () => this.showDialog,
      newVal => {
        if (newVal) {
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
          this.$timeout(function() {
            document.querySelector(".dialog-element-body input").focus();
          });
        } else {
          document.getElementsByTagName("body")[0].style.overflow = "";
        }
      }
    );
  }

  $onDestroy() {
    // this.watchChange();
    document.getElementsByTagName("body")[0].style.overflow = "";
  }

  returnValueFn(val) {
    this.returnValue({ val });
  }
}

dialogElementController.$inject = ["$timeout", "$scope"];
export default dialogElementController;
