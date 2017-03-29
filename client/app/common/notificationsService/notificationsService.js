import angular from 'angular';
import notificationsService from './notificationsService.service';

let notificationsServiceModule = angular.module('notificationsService', [])

  .service('notificationsService', notificationsService);

export default notificationsServiceModule;
