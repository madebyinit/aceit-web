import angular from 'angular';
import uiRouter from 'angular-ui-router';
import concentrationComponent from './concentration.component';

let concentrationModule = angular.module('concentration', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('concentration', {
        url: '/concentration',
        component: 'concentration'
      });
  })

  .component('concentration', concentrationComponent)

  .name;

export default concentrationModule;
