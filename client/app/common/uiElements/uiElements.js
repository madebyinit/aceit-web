import angular from 'angular';
import textInputComponent from './textInput/textInput';
import dialogElementComponent from './dialogElement/dialogElement';
import dialogElementGameComponent from './dialogElementGame/dialogElementGame';
import dialogElementSecondComponent from './dialogElementSecond/dialogElementSecond';

let uiElementsModule = angular.module('app.uiElements', [
])
  .component('textInput',textInputComponent)
  .component('dialogElement',dialogElementComponent)
  .component('dialogElementGame',dialogElementGameComponent)
  .component('dialogElementSecond',dialogElementSecondComponent)
  .name;

export default uiElementsModule;
