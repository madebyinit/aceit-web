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
    this._getUserData();
    this.connection.saveData(true,'summaryComplete');
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
    let that = this;
    this.enableRoutineButton = true;
    _.forEach(this.userSum,(value,key)=>{
      if(value >= 10 && !_.get(that.user,`${key}Complete`)){
        this.$timeout(()=>{
          this.enableRoutineButton = false;
        },0);
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
