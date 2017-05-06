import template from './pinkElephant.html';
import './pinkElephant.scss';

let pinkElephantComponent = {
  restrict: 'E',
  bindings: {
    changeView:'&?'
  },
  template
};

export default pinkElephantComponent;
