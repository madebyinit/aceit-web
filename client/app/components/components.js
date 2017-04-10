import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import loginModule from './login/login';
import mainMenuModule from './mainMenu/mainMenu';
import questionnaireModule from './questionnaire/questionnaire';

let componentModule = angular.module('app.components', [
  Home,
  About,
  loginModule,
  mainMenuModule,
  questionnaireModule
])

.name;

export default componentModule;
