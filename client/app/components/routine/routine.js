import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routineComponent from './routine.component';
import basketballSectionComponent from './directives/basketballSection/basketballSection';
import controlComponent from './directives/control/control';
import lionSectionComponent from './directives/lionSection/lionSection';
import routineDialogComponent from './directives/routineDialog/routineDialog.component';
import routineService from './routineService/routineService';

let routineModule = angular.module('routine', [
  uiRouter,
  routineService.name
])

  .config(($stateProvider) => {
    "ngInject";

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
.component('routineDialog', routineDialogComponent)

.name;

export default routineModule;
