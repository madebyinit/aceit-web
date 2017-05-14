import angular from 'angular';
import uiRouter from 'angular-ui-router';
import summaryComponent from './summary.component';
import requiredCardsComponent from './directives/requiredCards/requiredCards';
import optionalCardsComponent from './directives/optionalCards/optionalCards';

let summaryModule = angular.module('summary', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('summary', {
        component: 'summary',
        url:'/summary'
      });
  })

.component('summary', summaryComponent)
.directive('requiredCards', requiredCardsComponent)
.directive('optionalCards', optionalCardsComponent)

.name;

export default summaryModule;
