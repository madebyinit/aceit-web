const POSITIVE = 'positive';
const CONCENTRATION = 'concentration';
const PHYSICAL = 'physical';

class SummaryController {
  constructor(connection,$state,progressLinear,$timeout) {
    this.connection = connection;
    this.$state = $state;
    this.progressLinear = progressLinear;
    this.$timeout = $timeout;
  }

  $onInit(){
    this.progressLinear.showProgress();
    this.connection.saveData(true,'summaryComplete');
  }

  stateGo(name){
    this.$state.go(name);
  }

}
SummaryController.$inject = ['connection','$state','progressLinear','$timeout'];
export default SummaryController;
