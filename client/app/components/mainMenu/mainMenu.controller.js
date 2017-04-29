const CONNECTION = new WeakMap();

class MainMenuController {
  constructor($mdSidenav,$state,connection,stateChangeService) {
    CONNECTION.set(this, connection);
    this.$mdSidenav = $mdSidenav;
    this.stateChangeService = stateChangeService;
    this.$state = $state;
    this.toggleLeft = this._buildToggler('left');
  }

  $onInit(){
    this._getUser();
  }

  _getUser(){
    CONNECTION.get(this).getUserPromise().then((res)=>{
      this.user = res;
    })
  }

  _buildToggler(componentId) {
    return ()=>this.$mdSidenav(componentId).toggle();
  }

  logout(){
    this.stateChangeService.logoutUser();
  }

  stateChange(state){
    this.$state.go(state);
  }
}

MainMenuController.$inject = ['$mdSidenav','$state','connection','stateChangeService'];
export default MainMenuController;
