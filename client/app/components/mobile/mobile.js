import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mobileComponent from './mobile.component';

let mobileModule = angular.module('mobile', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('mobile', {
        url: '/mobile',
        component: 'mobile'
      });
  })

.component('mobile', mobileComponent)

.name;

export default mobileModule;
