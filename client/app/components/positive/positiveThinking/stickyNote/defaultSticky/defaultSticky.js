import template from './defaultSticky.html';
import controller from './defaultSticky.controller';
import './defaultSticky.scss';

let defaultStickyComponent = {
  restrict: 'E',
  controller,
  bindings:{
    finishedSticky:'&?'
  },
  template
};

export default defaultStickyComponent;
