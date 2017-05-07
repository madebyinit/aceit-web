class defaultStickyController {
  constructor() {

  }

  $onInit(){

  }

  completeDefaultSticky(name){
    this[name] = true;
    if(name === 'luckySticky'){
      this.defaultLuckySticky = true;
    }else if(name === 'materialSticky'){
      this.defaultMaterialSticky = true;
    }
    if(this.luckySticky && this.materialSticky){
      this.finishedSticky({complete:true});
    }
  }

  deleteDefalut(name){
    this[name] = false;
  }
}

defaultStickyController.$inject = [];
export default defaultStickyController;
