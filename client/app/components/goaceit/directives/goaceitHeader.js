import template from './goaceitHeader.html';
import './goaceitHeader.scss';

let goaceitHeaderComponent= {
  restrict: 'E',
  template,
  bindings: {
      user: '=',
      toggleDrawer: '&',
      open: '='
  }
  // controller
};

export default goaceitHeaderComponent;
