import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainMenuComponent from './mainMenu.component';
import menuItemsComponent from './menuItems/menuItems';

let mainMenuModule = angular.module('mainMenu', [
  uiRouter
])

.component('mainMenu', mainMenuComponent)
.directive('menuItems', menuItemsComponent)

.name;

export default mainMenuModule;
