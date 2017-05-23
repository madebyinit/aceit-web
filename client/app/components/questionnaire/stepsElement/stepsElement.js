import template from './stepsElement.html';
import './stepsElement.scss';

let stepsElementComponent = {
  restrict: 'E',
  bindings: {
    steps:'=',
    currentState:'=',
    stepClick:'&?'
  },
  template,
};

export default stepsElementComponent;
