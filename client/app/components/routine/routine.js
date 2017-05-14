import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routineComponent from './routine.component';

let routineModule = angular.module('routine', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('routine', {
        url: '/routine',
        component: 'routine'
      });
  })

.component('routine', routineComponent)

.name;

export default routineModule;
