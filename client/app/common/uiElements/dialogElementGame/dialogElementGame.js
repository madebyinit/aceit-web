import template from './dialogElementGame.html';
import controller from './dialogElementGame.controller';
import './dialogElementGame.scss';

let dialogElementGameComponent = {
  restrict: 'E',
  bindings: {
    showDialog:'=?',
    buttonCheck:'=?',
    headerTitle:'@?',
    buttonText:'@?',
    buttonText2:'@?',
    buttonText3:'@?',
    inputPlaceholder:'@?',
    inputTitle:'@?',
    inputTitle2:'@?',
    inputTitle3:'@?',
    inputTitle4:'@?',
    inputTitle5:'@?',
    inputTitle6:'@?',
    hideExit:'<?',
    isDisabledInput:'<?',
    returnValue:'&?',
    returnValue2:'&?',
    bindValue:'<?',
    bindValue2:'<?'
  },
  template,
  controller
};

export default dialogElementGameComponent;
