import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainMenuComponent from './mainMenu.component';
import settingsComponent from './settings/settings';

let mainMenuModule = angular.module('mainMenu', [
  uiRouter
])

.component('mainMenu', mainMenuComponent)
.component('settings', settingsComponent)

.name;

export default mainMenuModule;
