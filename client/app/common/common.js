import angular from 'angular';
import notificationsServiceModule from './notificationsService/notificationsService';

let commonModule = angular.module('app.common', [
  notificationsServiceModule.name
])
  
.name;

export default commonModule;
