class QuestionnaireService {
  constructor($timeout,connection,$state) {
    this.$timeout = $timeout;
    this.$state = $state;
    this.connection = connection;
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
    this._init();
  }

  _init(){
    this.connection.getData('questionnaire').then((res)=>{
      if(!_.isEmpty(res)){
        this.$timeout(()=>{
          _.map(this.steps,card=>_.assign(card, _.find(res, {name: card.name})));
        },0);
      }
    })
  }

  nextStep(){
    if(this.stepIndex === (this.steps.length-1)){
      this.connection.saveData({questionnaire:this.steps});
      this.$state.go('home');
    }else{
      this.stepIndex++;
      this.currentState = this.steps[this.stepIndex];
      this.connection.saveData({questionnaire:this.steps});
    }
  }

  backStep(){
    this.stepIndex--;
    this.currentState = this.steps[this.stepIndex];
  }
}

QuestionnaireService.$inject = ['$timeout','connection','$state'];
export default QuestionnaireService;
