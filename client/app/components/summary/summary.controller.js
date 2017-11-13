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
    // this.progressLinear.showProgress();
    this.connection.saveData(true,'summaryComplete');
    this._getUserData();
  }

  stateGo(name){
    this.$state.go(name);
  }
_getUserData(){
    this.connection.getData().then((res)=>{
      this.user = res;
      this.userSum = {positive:0,concentration:0,physical:0};
      if(_.get(res,'questionnaire')){
        this.sumUserQuestionnaire();
        // this.routineDisabled();
      }else{
        this.$state.go('questionnaire');
      }
        if (this.progressLinear) {
      this.progressLinear.hideProgress();
        }
    },(error)=>{
      console.log(error);
        if (this.progressLinear) {
      this.progressLinear.hideProgress();
        }
    });
  }


  sumUserQuestionnaire(){
    _.forEach(_.get(this.user,'questionnaire'),(value)=>{
      this.userSum[value.category] += value.answer;
    });
  }

}
SummaryController.$inject = ['connection','$state','progressLinear','$timeout'];
export default SummaryController;
