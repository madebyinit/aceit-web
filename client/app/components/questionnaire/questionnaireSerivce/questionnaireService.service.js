class QuestionnaireService {
  constructor($timeout,connection,$state) {
    this.$timeout = $timeout;
    this.$state = $state;
    this.connection = connection;
    this.steps = [
      {name:'worried_about',answer:null,category:'positive'},
      {name:'trouble_focusing',answer:null,category:'concentration'},
      {name:'my_stomach',answer:null,category:'physical'},
      {name:'so_nervous',answer:null,category:'concentration'},
      {name:'concerned_disappointed',answer:null,category:'positive'},
      {name:'heart_beats',answer:null,category:'physical'},
      {name:'unexpected_questions',answer:null,category:'concentration'},
      {name:'body',answer:null,category:'physical'},
      {name:'concerned_material',answer:null,category:'positive'},
      {name:'distracted',answer:null,category:'concentration'},
      {name:'learn_material',answer:null,category:'positive'},
      {name:'sleeping',answer:null,category:'physical'}
    ];
    this.stepIndex = 0;
    this.currentState = this.steps[this.stepIndex];
    this._init();
  }

  _init(){
    this.connection.getData().then((res)=>{
      if(_.get(res,'questionnaire')){
        if(!_.isEmpty(res)){
          this.$timeout(()=>{
            _.map(this.steps,step=>_.assign(step, _.find(res.questionnaire, {name: step.name})));
          },0);
        }
      }
    })
  }

  resetSteps(){
    this.stepIndex = 0;
    this.currentState = this.steps[this.stepIndex];
  }

  nextStep(){
    if(this.stepIndex === (this.steps.length-1)){
      this.connection.saveData(this.steps,'questionnaire');
      this.$state.go('summary');
    }else{
      this.stepIndex++;
      this.currentState = this.steps[this.stepIndex];
      this.connection.saveData(this.steps,'questionnaire');
    }
    this.connection.saveData(null,'routine');
  }

  backStep(){
    this.stepIndex--;
    this.currentState = this.steps[this.stepIndex];
  }

  editCurrentStep(step){
    this.stepIndex = step;
    this.currentState = this.steps[this.stepIndex];
  }
}

QuestionnaireService.$inject = ['$timeout','connection','$state'];
export default QuestionnaireService;
