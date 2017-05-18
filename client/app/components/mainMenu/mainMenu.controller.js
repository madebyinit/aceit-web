const CONNECTION = new WeakMap();

class MainMenuController {
  constructor($mdSidenav,$state,connection,stateChangeService,$log) {
    CONNECTION.set(this, connection);
    this.$mdSidenav = $mdSidenav;
    this.stateChangeService = stateChangeService;
    this.$state = $state;
    this.$log = $log;
  }

  $onInit(){
    this._getUser();
    angular.element(document).ready(()=> {
      this.$mdSidenav('left').onClose(()=> {
        document.getElementsByTagName('body')[0].style.overflow = '';
      });
    });
  }

  _getUser(){
    CONNECTION.get(this).getUserPromise().then((res)=>{
      this.user = res;
      this._checkSummaryComplete();
    })
  }

  closeMenu() {
    this.$mdSidenav('left').close().then(()=>{
      document.getElementsByTagName('body')[0].style.overflow = '';
    });
  }

  openMenu(){
    this.$mdSidenav('left').open().then(()=>{
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      });
  }

  logout(){
    this.stateChangeService.logoutUser();
  }

  stateChange(state){
    this.$state.go(state);
  }

  _checkSummaryComplete(){
    if(this.user.positiveComplete && this.user.physicalComplete && this.user.concentrationComplete){
      this.showFullSummary = true;
    }else if(this.user.summaryComplete){
      this.showSummary = true;
    }
  }
}

MainMenuController.$inject = ['$mdSidenav','$state','connection','stateChangeService','$log'];
export default MainMenuController;
