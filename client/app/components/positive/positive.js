import angular from 'angular';
import uiRouter from 'angular-ui-router';
import positiveComponent from './positive.component';
import pinkElephantComponent from './pinkElephant/pinkElephant';
import positiveThinkingComponent from './positiveThinking/positiveThinking.component';
import stickyNoteComponent from './positiveThinking/stickyNote/stickyNote.component';

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
      });
  })

.component('positive', positiveComponent)
.component('positiveThinking', positiveThinkingComponent)
.component('pinkElephant', pinkElephantComponent)
.component('stickyNote', stickyNoteComponent)

.name;

export default positiveModule;
