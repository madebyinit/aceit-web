import template from './lionSection.html';
import './lionSection.scss'

let lionSectionComponent = ()=>{
  return{
    restrict: 'E',
    template,
  }
};

export default lionSectionComponent;
