import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import loginModule from './login/login';

let componentModule = angular.module('app.components', [
  Home,
  About,
  loginModule
])

.name;

export default componentModule;
