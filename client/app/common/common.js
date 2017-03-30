import angular from 'angular';
import notificationsServiceModule from './notificationsService/notificationsService';
import textInputComponent from './uiElements/textInput/textInput';

let commonModule = angular.module('app.common', [
  notificationsServiceModule.name
])
  .component('textInput',textInputComponent)
.name;

export default commonModule;
