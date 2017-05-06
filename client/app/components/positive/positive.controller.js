class PositiveController {
  constructor() {
    this.name = 'positive';
  }

  $onInit(){
  }

  changeView(bol){
    this.viewInit = bol;
  }
}

PositiveController.$inject = [];
export default PositiveController;
