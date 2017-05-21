import angular from 'angular';
import routineServiceModel from './routineService.service';

let routineServiceModule = angular.module('routineService', [])

  .service('routineService', routineServiceModel);

export default routineServiceModule;
