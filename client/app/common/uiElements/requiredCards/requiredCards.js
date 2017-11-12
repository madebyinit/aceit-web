import template from './requiredCards.html';
import controller from './requiredCards.controller';

let requiredCardsComponent = ()=>{
  return {
    restrict: 'E',
    template,
    controller: controller,
    controllerAs: 'ctrl'
  };
};

export default requiredCardsComponent;
