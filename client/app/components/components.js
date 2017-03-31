import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import loginModule from './login/login';
import mainMenuModule from './mainMenu/mainMenu';

let componentModule = angular.module('app.components', [
  Home,
  About,
  loginModule,
  mainMenuModule
])

.name;

export default componentModule;
