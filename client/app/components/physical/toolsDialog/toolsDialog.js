import angular from 'angular';
import uiRouter from 'angular-ui-router';
import toolsDialogComponent from './toolsDialog.component';

let toolsDialogModule = angular.module('toolsDialog', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('toolsDialog', {
        url: '/toolsDialog',
        component: 'toolsDialog'
      });
  })

.component('toolsDialog', toolsDialogComponent)

.name;

export default toolsDialogModule;
