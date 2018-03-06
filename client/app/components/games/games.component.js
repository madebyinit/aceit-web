import template from './games.html';
import controller from './games.controller';
import './games.scss';
// import '../../lib/mazerace';

let gamesComponent = {
  restrict: 'E',
  bindings: {},
  sound: false,
  template,
  // game : nogic.initialize(document.getElementById('holder'), {language:'en', level:1}),
  controller
};

export default gamesComponent;
