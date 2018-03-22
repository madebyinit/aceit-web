class dialogElementGameController {
  constructor($timeout,$scope) {
    this.$timeout = $timeout;
    this.$scope = $scope;
    this.ButtonCheck = false;
  }

  $onInit(){
    this.watchChange = this.$scope.$watch(() => this.showDialog,(newVal) =>{
      if(newVal){
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      }else if(newVal === false){
        document.getElementsByTagName('body')[0].style.overflow = '';
      }
    });
  }

  $onDestroy(){
    this.watchChange();
  }

  returnValueFn(val){
    this.returnValue({val:val});
  }

  returnValueFn2(val){
    this.returnValue2({val:val});

  }

  changeButton(){
    this.ButtonCheck = true;
  }
}

dialogElementGameController.$inject = ['$timeout','$scope'];
export default dialogElementGameController;
