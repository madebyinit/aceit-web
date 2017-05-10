import template from './imagery.html';
import controller from './imagery.controller';
import './imagery.scss';

let ImageryComponent = {
  restrict: 'E',
  bindings: {
    stepsComplete:'=?'
  },
  template,
  controller
};

export default ImageryComponent;
