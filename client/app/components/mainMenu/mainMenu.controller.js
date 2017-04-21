import firebase from 'firebase';
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

  logout(){
    firebase.auth().signOut().then((res)=> {
      this.$state.go('loginView.login');
    }).catch((error)=> {
      console.log(error)
    });
  }

  stateChange(state){
    this.$state.go(state);
  }
}

MainMenuController.$inject = ['$mdSidenav','$state','connection'];
export default MainMenuController;
