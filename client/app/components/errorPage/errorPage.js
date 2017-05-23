import angular from 'angular';
import uiRouter from 'angular-ui-router';
import errorPageComponent from './errorPage.component';

let errorPageModule = angular.module('errorPage', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('errorPage', {
        url: '/404',
        component: 'errorPage'
      });
  })

.component('errorPage', errorPageComponent)

.name;

export default errorPageModule;
