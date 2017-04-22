const CONNECTION = new WeakMap();

class MainMenuController {
  constructor($mdSidenav,$state,connection) {
    CONNECTION.set(this, connection);
    this.$mdSidenav = $mdSidenav;
    this.$state = $state;
    this.toggleLeft = this._buildToggler('left');
  }

  _buildToggler(componentId) {
    return ()=>this.$mdSidenav(componentId).toggle();
  }

  stateChange(state){
    this.$state.go(state);
  }
}

MainMenuController.$inject = ['$mdSidenav','$state','connection'];
export default MainMenuController;
