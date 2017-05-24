import angular from 'angular';
import connectServices from './connectServices.service';

let connectServicesModule = angular.module('connectServices', [])

  .service('connectServices', connectServices);

export default connectServicesModule;
