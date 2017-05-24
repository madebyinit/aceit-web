import angular from 'angular';
import uiRouter from 'angular-ui-router';
import staticPageComponent from './staticPage.component';
import privacyComponent from './privacy/privacy';
import termsComponent from './terms/terms';

let staticPageModule = angular.module('staticPage', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('privacyPolicy', {
        url: '/privacy-policy',
        component: 'staticPage'
      })
    .state('termsOfUse', {
      url: '/terms-of-use',
      component: 'staticPage'
    });
  })

.component('staticPage', staticPageComponent)
.component('privacy', privacyComponent)
.component('terms', termsComponent)

.name;

export default staticPageModule;
