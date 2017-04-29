class dialogElementController {
  constructor($timeout) {
    this.$timeout = $timeout;
  }

  returnValueFn(val){
    this.returnValue({val:val});
  }
}

dialogElementController.$inject = ['$timeout'];
export default dialogElementController;
