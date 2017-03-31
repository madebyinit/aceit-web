import angular from 'angular';
import progressLinearService from './progressLinear.service';

let progressLinearServiceModule = angular.module('progressLinear', [])

  .service('progressLinear', progressLinearService);

export default progressLinearServiceModule;
