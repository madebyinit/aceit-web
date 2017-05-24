import angular from 'angular';
import notificationsServiceModule from './notificationsService/notificationsService';
import progressLinearServiceModule from './progressLinear/progressLinear';
import connectionServiceModule from './connection/connection';
import uiElementsModule from './uiElements/uiElements';
import firebaseServiceModule from './firebaseService/firebaseService';
import stateChangeServiceModule from './stateChangeService/stateChangeService';
import connectServicesModule from './connectServices/connectServices';

let commonModule = angular.module('app.common', [
  notificationsServiceModule.name,
  connectionServiceModule.name,
  firebaseServiceModule.name,
  progressLinearServiceModule.name,
  uiElementsModule,
  stateChangeServiceModule.name,
  connectServicesModule.name
])
.name;

export default commonModule;
