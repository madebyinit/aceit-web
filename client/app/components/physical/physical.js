import angular from 'angular';
import uiRouter from 'angular-ui-router';
import physicalComponent from './physical.component';
import imageryComponent from './imagery/imagery';

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
.component('imagery', imageryComponent)

.name;

export default physicalModule;
