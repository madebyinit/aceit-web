import template from './goaceitHeader.html';
import './goaceitHeader.scss';

let goaceitHeaderComponent= {
  restrict: 'E',
  template,
  bindings: {
      user: '='
  }
  // controller
};

export default goaceitHeaderComponent;
