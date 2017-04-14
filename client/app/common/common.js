import angular from 'angular';
import notificationsServiceModule from './notificationsService/notificationsService';
import progressLinearServiceModule from './progressLinear/progressLinear';
import connectionServiceModule from './connection/connection';
import uiElementsModule from './uiElements/uiElements';

let commonModule = angular.module('app.common', [
  notificationsServiceModule.name,
  connectionServiceModule.name,
  progressLinearServiceModule.name
])
.name;

export default commonModule;
