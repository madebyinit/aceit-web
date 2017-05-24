class StaticPageController {
  constructor($state) {
    this.$state = $state;
  }

  $onInit(){
    this[this.$state.current.name] = true;
  }
}

StaticPageController.$inject = ['$state'];
export default StaticPageController;
