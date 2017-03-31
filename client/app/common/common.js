import angular from 'angular';
import notificationsServiceModule from './notificationsService/notificationsService';
import progressLinearServiceModule from './progressLinear/progressLinear';
import textInputComponent from './uiElements/textInput/textInput';

let commonModule = angular.module('app.common', [
  notificationsServiceModule.name,
  progressLinearServiceModule.name
])
  .component('textInput',textInputComponent)
.name;

export default commonModule;
