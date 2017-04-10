class MainMenuController {
  constructor($mdSidenav,$state) {
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

MainMenuController.$inject = ['$mdSidenav','$state'];
export default MainMenuController;
