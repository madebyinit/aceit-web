class MainMenuController {
  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
    this.toggleLeft = this._buildToggler('left');
  }

  _buildToggler(componentId) {
    return ()=>this.$mdSidenav(componentId).toggle();
  }
}

MainMenuController.$inject = ['$mdSidenav'];
export default MainMenuController;
