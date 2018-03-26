import template from './dialogElementSecond.html';
import controller from './dialogElementSecond.controller';
import './dialogElementSecond.scss';

let dialogElementSecondComponent = {
  restrict: 'E',
  bindings: {
    showWindow:'=?',
    buttonText:'@?',
    buttonText2:'@?',
    buttonText3:'@?',
    inputTitle:'@?',
    inputTitle2:'@?',
    inputTitle3:'@?',
    returnValue:'&?',
    returnValue2:'&?',
    returnValue3:'&?',
  },
  template,
  controller
};

export default dialogElementSecondComponent;
