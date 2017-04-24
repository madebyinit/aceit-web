import firebase from 'firebase';
const CONNECTION = new WeakMap();

class MainMenuController {
  constructor($mdSidenav,$state,connection,firebaseService) {
    CONNECTION.set(this, connection);
    this.$mdSidenav = $mdSidenav;
    this.firebaseService = firebaseService;
    this.$state = $state;
    this.toggleLeft = this._buildToggler('left');
  }

  $onInit(){
    this.user = this.firebaseService.getUser();
    this.fullName = this.user.displayName;
  }

  _buildToggler(componentId) {
    return ()=>this.$mdSidenav(componentId).toggle();
  }

  logout(){
    this.firebaseService.logout();
  }

  stateChange(state){
    this.$state.go(state);
  }
}

MainMenuController.$inject = ['$mdSidenav','$state','connection','firebaseService'];
export default MainMenuController;
