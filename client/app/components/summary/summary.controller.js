const POSITIVE = 'positive';
const CONCENTRATION = 'concentration';
const PHYSICAL = 'physical';

class SummaryController {
  constructor(connection,$state,progressLinear) {
    this.connection = connection;
    this.$state = $state;
    this.progressLinear = progressLinear;
    this.userSum = {positive:0,concentration:0,physical:0};
  }

  $onInit(){
    this._getUserData();
  }

  _getUserData(){
    this.progressLinear.showProgress();
    this.connection.getData().then((res)=>{
      if(_.get(res,'questionnaire')){
        this.user = res;
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
    console.log(this.userSum);
  }
}

SummaryController.$inject = ['connection','$state','progressLinear'];
export default SummaryController;
