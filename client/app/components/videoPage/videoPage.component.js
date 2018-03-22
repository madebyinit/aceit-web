import template from './videoPage.html';
import VideoPageController from './videoPage.controller';
import './videoPage.scss';

let videoPageComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: VideoPageController
};

export default videoPageComponent;
