import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gamesComponent from './games.component';

const gamesModule = angular.module('games', [
  uiRouter,
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('games', {
        url: '/games',
        component: 'games',
        data: {
          authenticate: true,
        },
      });
  })

  .component('games', gamesComponent)

  .name;

export default gamesModule;
