import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import loginModule from './login/login';
import mainMenuModule from './mainMenu/mainMenu';
import questionnaireModule from './questionnaire/questionnaire';
import concentrationModule from './concentration/concentration';
import physicalModule from './physical/physical';
import summaryModule from './summary/summary';
import positiveModule from './positive/positive';
import routineModule from './routine/routine';

let componentModule = angular.module('app.components', [
  Home,
  About,
  loginModule,
  mainMenuModule,
  questionnaireModule,
  physicalModule,
  concentrationModule,
  summaryModule,
  positiveModule,
  routineModule
])

.name;

export default componentModule;
