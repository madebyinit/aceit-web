import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goaceitComponent from './goaceit.component';
import goaceitHeaderComponent from './components/goaceitHeader';

let goaceitModule = angular.module('goaceit', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('goaceit', {
        url: '/goaceit',
        component: 'goaceit'
      });
  })

.component('goaceit', goaceitComponent)
.component('goaceitHeader',goaceitHeaderComponent)

.name;

export default goaceitModule;
