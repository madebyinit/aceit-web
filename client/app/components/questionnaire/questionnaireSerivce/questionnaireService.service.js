class QuestionnaireService {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.steps = [
      {name:'worried_about',answer:null},
      {name:'trouble_focusing',answer:null},
      {name:'my_stomach',answer:null},
      {name:'so_nervous',answer:null},
      {name:'concerned_disappointed',answer:null},
      {name:'heart_beats',answer:null},
      {name:'unexpected_questions',answer:null},
      {name:'about_doing_well',answer:null},
      {name:'neck_and_shoulders',answer:null},
      {name:'feel_nervous',answer:null},
      {name:'learn_material',answer:null}
    ];
    this.stepIndex = 0;
    this.currentState = this.steps[this.stepIndex];
  }

  nextStep(){
    if(this.stepIndex === (this.steps.length-1)){
      console.log('Steps:',this.steps);
    }else{
      this.stepIndex++;
      this.currentState = this.steps[this.stepIndex];
    }
  }

  backStep(){
    this.stepIndex--;
    this.currentState = this.steps[this.stepIndex];
  }
}

QuestionnaireService.$inject = ['$timeout'];
export default QuestionnaireService;
