import firebase from 'firebase';
const CONNECTION = new WeakMap();

class MainMenuController {
  constructor($mdSidenav,$state,connection,firebaseService,stateChangeService) {
    CONNECTION.set(this, connection);
    this.$mdSidenav = $mdSidenav;
    this.firebaseService = firebaseService;
    this.stateChangeService = stateChangeService;
    this.$state = $state;
    this.toggleLeft = this._buildToggler('left');
  }

  $onInit(){

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

MainMenuController.$inject = ['$mdSidenav','$state','connection','firebaseService','stateChangeService'];
export default MainMenuController;
