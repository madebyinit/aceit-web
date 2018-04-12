import angular from 'angular';
import uiRouter from 'angular-ui-router';
import algorithmComponent from './algorithm.component';

let algorithmModule = angular.module('algorithm', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('algorithm', {
      url: '/algorithm',
      component: 'algorithm',
      data:{
        authenticate:true
      }
    });
})

.component('algorithm', algorithmComponent)
  
.name;

export default algorithmModule;