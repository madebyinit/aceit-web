import template from './algorithm.html';
import AlgorithmController from './algorithm.controller';
import './algorithm.scss';

const algorithmComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: AlgorithmController,
};

export default algorithmComponent;
