class QuestionnaireController {
  constructor(questionnaireService,notificationsService) {
    this.questionnaireService = questionnaireService;
    this.notificationsService = notificationsService;
    this.steps = this.questionnaireService.steps;
  }

  answerHelper(answer){
    this.questionnaireService.steps[this.questionnaireService.stepIndex].answer = answer;
  }

  nextStep(){
    if(this.questionnaireService.steps[this.questionnaireService.stepIndex].answer){
      this.questionnaireService.nextStep();
    }else{
      this.notificationsService.showToast('Error Missing');
    }
  }

  backStep(){
    this.questionnaireService.backStep();
  }
}

QuestionnaireController.$inject = ['questionnaireService','notificationsService'];
export default QuestionnaireController;
