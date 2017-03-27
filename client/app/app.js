import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppController from './app.controller';
import 'angularfire';
import 'normalize.css';
import 'angular-material/angular-material.scss';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    angularAnimate,
    angularAria,
    angularMaterial,
    'firebase'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run(AppController)

  .component('app', AppComponent);
