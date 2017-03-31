class progressLinearService {
  constructor($rootScope,$timeout) {
    this.$rootScope = $rootScope;
    this.$timeout = $timeout;
  }

  showProgress(){
    this.$timeout(()=>{
      this.$rootScope.showLoader = true;
    },0);
  }

  hideProgress(){
    this.$timeout(()=>{
      this.$rootScope.showLoader = false;
    },0);
  }
}

progressLinearService.$inject = ['$rootScope','$timeout'];
export default progressLinearService;
