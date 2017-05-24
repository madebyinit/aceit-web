import angular from 'angular';
import connectionService from './connection.service';

let connectionServiceModule = angular.module('connection', [])

  .service('connection', connectionService);

export default connectionServiceModule;
