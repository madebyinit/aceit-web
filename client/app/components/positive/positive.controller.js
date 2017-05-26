class PositiveController {
  constructor($state) {
    this.$state = $state;
  }

  $onInit(){
    this.$state.go('positive.elephant');
  }

}

PositiveController.$inject = ['$state'];
export default PositiveController;
