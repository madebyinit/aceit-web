class PhysicalController {
  constructor() {
    this.name = 'physical';
  }

  $onInit(){
    this.currentNavItem = 'imagery';
  }

  goto(name){
    this.currentNavItem = name;
  }
}

PhysicalController.$inject = [];
export default PhysicalController;
