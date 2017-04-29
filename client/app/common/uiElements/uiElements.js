import angular from 'angular';
import textInputComponent from './textInput/textInput';
import dialogElementComponent from './dialogElement/dialogElement';

let uiElementsModule = angular.module('app.uiElements', [
])
  .component('textInput',textInputComponent)
  .component('dialogElement',dialogElementComponent)
  .name;

export default uiElementsModule;
