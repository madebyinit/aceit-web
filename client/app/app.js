import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppController from './app.controller';
import 'script!auth0.js/build/auth0.js';
import 'angular-jwt';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    'auth0.auth0',
    'angular-jwt'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run(AppController)

  .component('app', AppComponent);
