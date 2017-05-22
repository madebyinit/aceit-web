import template from './selectElement.html';
import controller from './selectElement.controller';
import './selectElement.scss';

let selectElementComponent = {
  restrict: 'E',
  bindings: {
    onRating:'&?',
    answer:'<?'
  },
  template,
  controller
};

export default selectElementComponent;
