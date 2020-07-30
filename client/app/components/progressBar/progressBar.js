import angular from 'angular';
import uiRouter from 'angular-ui-router';
import progressBarComponent from './progressBar.component';

let progressBarModule = angular.module('progressBar', [
  uiRouter
])
.component('progressBar', progressBarComponent)
.name;

export default progressBarModule;
