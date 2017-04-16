import angular from 'angular';
import textInputComponent from './textInput/textInput';

let uiElementsModule = angular.module('app.uiElements', [
])
  .component('textInput',textInputComponent)
  .name;

export default uiElementsModule;
