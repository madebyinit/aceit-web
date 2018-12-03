import angular from 'angular';
import textInputComponent from './textInput/textInput';
import dialogElementComponent from './dialogElement/dialogElement';
import dialogElementVideoComponent from './dialogElementVideo/dialogElementVideo';
import dialogElementGameComponent from './dialogElementGame/dialogElementGame';
import dialogElementSecondComponent from './dialogElementSecond/dialogElementSecond';
import requiredCardsComponent from './requiredCards/requiredCards';

const uiElementsModule = angular.module('app.uiElements', [
])
  .component('textInput', textInputComponent)
  .component('dialogElement', dialogElementComponent)
  .component('dialogElementVideo', dialogElementVideoComponent)
  .component('dialogElementGame', dialogElementGameComponent)
  .component('dialogElementSecond', dialogElementSecondComponent)
  .directive('requiredCards', requiredCardsComponent)

  .name;

export default uiElementsModule;
