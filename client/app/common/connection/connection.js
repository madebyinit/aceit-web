import angular from 'angular';
import connectionService from './connection.service';

let connectionServiceModule = angular.module('connectionService', [])

  .service('connection', connectionService);

export default connectionServiceModule;
