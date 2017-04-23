class HomeController {
  constructor($translate,firebaseService) {
    this.$translate = $translate;
    this.user = firebaseService.getUser();
    this.userTitle = this.$translate.instant('home.you_getting_ready',{user:this.user.displayName});
  }

}
HomeController.$inject = ['$translate','firebaseService'];
export default HomeController;
