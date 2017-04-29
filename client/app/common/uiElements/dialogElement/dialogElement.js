import template from './dialogElement.html';
import controller from './dialogElement.controller';
import './dialogElement.scss';

let dialogElementComponent = {
  restrict: 'E',
  bindings: {
    showDialog:'=?',
    headerTitle:'@?',
    buttonText:'@?',
    inputPlaceholder:'@?',
    inputTitle:'@?',
    isDisabledInput:'<?',
    returnValue:'&?',
    bindValue:'<?'
  },
  template,
  controller
};

export default dialogElementComponent;
