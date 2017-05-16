import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routineComponent from './routine.component';
import basketballSectionComponent from './directives/basketballSection/basketballSection';
import controlComponent from './directives/control/control';
import lionSectionComponent from './directives/lionSection/lionSection';

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
.directive('basketballSection', basketballSectionComponent)
.directive('lionSection', lionSectionComponent)
.component('control', controlComponent)

.name;

export default routineModule;
