import template from './defaultSticky.html';
import controller from './defaultSticky.controller';
import './defaultSticky.scss';

let defaultStickyComponent = {
  restrict: 'E',
  controller,
  bindings:{
    finishedSticky:'&?',
    returnSticky:'&?',
    defaultDone:'<?'
  },
  template
};

export default defaultStickyComponent;
