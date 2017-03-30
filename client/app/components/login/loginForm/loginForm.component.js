import template from './loginForm.html';
import controller from './loginForm.controller';
import './loginForm.scss';

let loginFormComponent = {
  restrict: 'E',
  bindings: {},
  controller,
  template
};

export default loginFormComponent;
