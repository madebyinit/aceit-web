import template from './games.html';
import controller from './games.controller';
import './games.scss';

let gamesComponent = {
  restrict: 'E',
  bindings: {},
  sound: false,
  template,
  controller
};

export default gamesComponent;
