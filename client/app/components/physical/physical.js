import angular from 'angular';
import uiRouter from 'angular-ui-router';
import physicalComponent from './physical.component';
import imageryComponent from './imagery/imagery';
import neckAndShouldersComponent from './neckAndShoulders/neckAndShoulders';
import breathingComponent from './breathing/breathing';
import toolsDialogComponent from './toolsDialog/toolsDialog.component.js';

let physicalModule = angular.module('physical', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('physical', {
        url: '/physical',
        component: 'physical'
      });
  })

.component('physical', physicalComponent)
.component('breathing', breathingComponent)
.component('neckAndShoulders', neckAndShouldersComponent)
.component('imagery', imageryComponent)
.component('toolsDialog',toolsDialogComponent)

.name;

export default physicalModule;
