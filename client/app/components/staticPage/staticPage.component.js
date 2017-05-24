import template from './staticPage.html';
import controller from './staticPage.controller';
import './staticPage.scss';

let staticPageComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default staticPageComponent;
