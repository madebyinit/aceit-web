import template from './questionnaireElement.html';
import controller from './questionnaireElement.controller';
import './questionnaireElement.scss';

let questionnaireElementComponent = {
  restrict: 'E',
  bindings: {
    questionModel:'@?',
    number:'@?',
    answerReturn:'&',
    answer:'<?',
    disabledStep:'<?'
  },
  template,
  controller
};

export default questionnaireElementComponent;
