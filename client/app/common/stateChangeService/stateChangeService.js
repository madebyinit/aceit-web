import angular from 'angular';
import stateChangeService from './stateChangeService.service';

let stateChangeServiceModule = angular.module('stateChangeService', [])

  .service('stateChangeService', stateChangeService);

export default stateChangeServiceModule;
