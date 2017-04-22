class HomeController {
  constructor($translate) {
    this.$translate = $translate;
    this.userTitle = this.$translate.instant('home.you_getting_ready',{user:'Orel'});
  }

}
HomeController.$inject = ['$translate'];
export default HomeController;
