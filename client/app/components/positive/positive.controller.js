class PositiveController {
  constructor($state) {
    this.$state = $state;
  }

  $onInit(){
    this.$state.go('positive.thinking');
  }

}

PositiveController.$inject = ['$state'];
export default PositiveController;
