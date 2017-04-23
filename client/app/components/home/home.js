import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home',
      resolve:{
        result:($rootScope)=>{
          return $rootScope.user;
        }
      }
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
