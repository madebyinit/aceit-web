import angular from 'angular';
import textInputComponent from './textInput/textInput';
import dialogElementComponent from './dialogElement/dialogElement';
import requiredCardsComponent from './requiredCards/requiredCards';

let uiElementsModule = angular.module('app.uiElements', [
])
  .component('textInput',textInputComponent)
  .component('dialogElement',dialogElementComponent)
  .directive('requiredCards', requiredCardsComponent)
  .name;

export default uiElementsModule;
