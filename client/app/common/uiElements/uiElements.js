import angular from 'angular';
import textInputComponent from './textInput/textInput';
import dialogElementComponent from './dialogElement/dialogElement';
import dialogElementGameComponent from './dialogElementGame/dialogElementGame'

let uiElementsModule = angular.module('app.uiElements', [
])
  .component('textInput',textInputComponent)
  .component('dialogElement',dialogElementComponent)
  .component('dialogElementGame',dialogElementGameComponent)
  .name;

export default uiElementsModule;
