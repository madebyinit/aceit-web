import template from './toolsDialog.html';
import controller from '../physical.controller.js';
import './toolsDialog.scss';

let toolsDialogComponent = {
  restrict: 'E',
  bindings: {
    showToolsDialog:'=?',
    headerTitle:'@?',
    buttonText:'@?',
    inputTitle:'@?',
    hideExit:'<?',
    isDisabledInput:'<?',
    returnValue:'&?',
    bindValue:'<?'
  },
  template,
  controller
};

export default toolsDialogComponent;
