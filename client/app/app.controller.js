import consts from './consts.js';

class AppController {
  constructor($state,$rootScope,notificationsService,$transitions,stateChangeService) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$rootScope.imageCdn = consts.imageCdn;
    this.$rootScope.videoCdn = consts.videoCdn;
    this.notificationsService = notificationsService;
    this.stateChangeService = stateChangeService;
    this._startApp();
  }

  _startApp(){
    this.stateChangeService.appInit();
    this.stateChangeService.stateChange();
  }

  static AppFactory($state,$rootScope,notificationsService,$transitions,stateChangeService) {
    return new AppController($state,$rootScope,notificationsService,$transitions,stateChangeService);
  }
}

AppController.AppFactory.$inject = ['$state','$rootScope','notificationsService','$transitions','stateChangeService'];
export default AppController.AppFactory;
