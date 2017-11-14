import template from './goaceitHeader.html';
import controller from './goaceitHeader.controller.js';
import './goaceitHeader.scss';

let goaceitHeaderComponent= {
  restrict: 'E',
  template,
  bindings: {
      open: '='
  },
  controller
};

export default goaceitHeaderComponent;
