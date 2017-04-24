import angular from 'angular';
import firebaseService from './firebaseService.service';

let firebaseServiceModule = angular.module('firebaseService', [])

  .service('firebaseService', firebaseService);

export default firebaseServiceModule;
