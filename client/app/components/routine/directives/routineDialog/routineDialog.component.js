import template from './routineDialog.html';
import controller from './routineDialog.controller';
import './routineDialog.scss';

let routineDialogComponent = {
  restrict: 'E',
  bindings: {
    showDialog:'=?',
    returnData:'&?',
    step:'@?',
    closeDialog:'&?',
    type:'@?'
  },
  template,
  controller
};

export default routineDialogComponent;
