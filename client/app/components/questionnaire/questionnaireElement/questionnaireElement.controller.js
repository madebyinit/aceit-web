class QuestionnaireElementController {
  constructor() {
    this.name = 'questionnaireElement';
  }

  elementChange(value){
    this.answerReturn({answer:value});
  }
}

QuestionnaireElementController.$inject = [];
export default QuestionnaireElementController;
