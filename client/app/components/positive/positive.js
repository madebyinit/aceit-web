import angular from 'angular';
import uiRouter from 'angular-ui-router';
import positiveComponent from './positive.component';
import pinkElephantComponent from './pinkElephant/pinkElephant';
import positiveThinkingComponent from './positiveThinking/positiveThinking.component';
import stickyNoteComponent from './positiveThinking/stickyNote/stickyNote.component';
import defaultStickyComponent from './positiveThinking/stickyNote/defaultSticky/defaultSticky';

let positiveModule = angular.module('positive', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('positive', {
        url: '/positive',
        component: 'positive'
      })
      .state('positive.elephant', {
        component: 'pinkElephant'
      })
      .state('positive.thinking', {
        component: 'positiveThinking'
      });
  })

  .component('positive', positiveComponent)
  .component('positiveThinking', positiveThinkingComponent)
  .component('pinkElephant', pinkElephantComponent)
  .component('stickyNote', stickyNoteComponent)
  .component('defaultSticky', defaultStickyComponent)

  .name;

export default positiveModule;
