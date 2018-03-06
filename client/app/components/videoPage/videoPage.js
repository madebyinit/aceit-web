import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoPageComponent from './videoPage.component';

let videoPageModule = angular.module('videoPage', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('videoPage', {
      url: '/videoPage',
      component: 'videoPage',
      data:{
        authenticate:true
      }
    });
})

.component('videoPage', videoPageComponent)
  
.name;

export default videoPageModule;
