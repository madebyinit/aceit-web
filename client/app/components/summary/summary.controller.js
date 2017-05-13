const POSITIVE = 'positive';
const CONCENTRATION = 'concentration';
const PHYSICAL = 'physical';

class SummaryController {
  constructor(connection,$state,progressLinear) {
    this.connection = connection;
    this.$state = $state;
    this.progressLinear = progressLinear;
  }

  $onInit(){
    this.progressLinear.showProgress();
    this._getUserData();
  }

  stateGo(name){
    this.$state.go(name);
  }

  _getUserData(){
    this.connection.getUserPromise().then((res)=>{
      this.user = res;
      this.userSum = {positive:0,concentration:0,physical:0};
      if(_.get(res,'questionnaire')){
        this.sumUserQuestionnaire();
        this.routineDisabled();
      }else{
        this.$state.go('questionnaire');
      }
      this.progressLinear.hideProgress();
    },(error)=>{
      console.log(error);
      this.progressLinear.hideProgress();
    })
  }

  routineDisabled(){
    this.enableRoutineButton = false
  }

  sumUserQuestionnaire(){
    _.forEach(_.get(this.user,'questionnaire'),(value)=>{
      this.userSum[value.category] += value.answer;
    });
  }
}

SummaryController.$inject = ['connection','$state','progressLinear'];
export default SummaryController;
