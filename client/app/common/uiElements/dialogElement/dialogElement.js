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
    inputTitle2:'@?',
    inputTitle3:'@?',
    hideExit:'<?',
    isDisabledInput:'<?',
    returnValue:'&?',
    bindValue:'<?'
  },
  template,
  controller
};

export default dialogElementComponent;
