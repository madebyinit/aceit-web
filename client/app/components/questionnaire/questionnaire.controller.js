class QuestionnaireController {
  constructor(questionnaireService,notificationsService,connection) {
    this.questionnaireService = questionnaireService;
    this.notificationsService = notificationsService;
    this.connection = connection;
    this.steps = this.questionnaireService.steps;
  }

  $onInit(){
    this.questionnaireService.resetSteps();
    this._saveStateComplete();
  }

  _saveStateComplete(){
    this.connection.saveData(true,'questionnaireComplete');
  }

  answerHelper(answer){
    this.questionnaireService.steps[this.questionnaireService.stepIndex].answer = answer;
    this.questionnaireService.nextStep();
  }

  nextStep(){
    if(this.questionnaireService.steps[this.questionnaireService.stepIndex].answer){
      this.questionnaireService.nextStep();
    }else{
      this.notificationsService.showToast('Error Missing');
    }
  }

  stepClick(step){
    this.questionnaireService.editCurrentStep(step);
  }

  backStep(){
    this.questionnaireService.backStep();
  }
}

QuestionnaireController.$inject = ['questionnaireService','notificationsService','connection'];
export default QuestionnaireController;
