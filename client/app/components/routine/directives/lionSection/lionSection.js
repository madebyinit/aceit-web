import template from './lionSection.html';
import './lionSection.scss'
import LionSectionController from './lionSection.controller';

let lionSectionComponent = () =>{
  return{
    restrict: 'E',
    template,
    controller: LionSectionController,
    controllerAs: '$ctrl'
  }
};

export default lionSectionComponent;
