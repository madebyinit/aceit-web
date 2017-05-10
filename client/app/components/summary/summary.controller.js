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
    this._getUserData();
  }

  stateGo(name){
    this.$state.go(name);
  }

  _getUserData(){
    this.progressLinear.showProgress();
    this.connection.getUserPromise().then((res)=>{
      this.user = res;
      this.userSum = {positive:0,concentration:0,physical:0};
      if(_.get(res,'questionnaire')){
        this.sumUserQuestionnaire();
      }else{
        this.$state.go('questionnaire');
      }
    },(error)=>{
      console.log(error);
    })
  }

  sumUserQuestionnaire(){
    _.forEach(_.get(this.user,'questionnaire'),(value)=>{
      this.userSum[value.category] += value.answer;
    });
    this.progressLinear.hideProgress();
  }
}

SummaryController.$inject = ['connection','$state','progressLinear'];
export default SummaryController;
