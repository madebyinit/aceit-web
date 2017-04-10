import angular from 'angular';
import questionnaireServiceModel from './questionnaireService.service';

let questionnaireServiceModule = angular.module('questionnaireService', [])

  .service('questionnaireService', questionnaireServiceModel);

export default questionnaireServiceModule;
