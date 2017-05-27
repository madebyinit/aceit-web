class PhysicalController {
  constructor(connection,$timeout,$state) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.$state = $state;
  }

  $onInit(){
    this.allStepsComplete = false;
    this._checkToolComplete();
    this.checkList = [];
    this.goto('breathing');
  }

  goSummary(){
    this.$state.go('summary');
  }

  _checkToolComplete(){
    this.connection.getUserPromise().then((res)=>{
      if(_.get(res,'physicalComplete')){
        this.$timeout(()=>{
          this.allStepsComplete = _.get(res,'physicalComplete');
        },0)
      }
    })
  }

  moveToNextStep(step){
    if(step === 'breathing'){
      this.goto('neck');
    }else if(step === 'neck'){
      this.goto('imagery');
    }
    window.scrollTo(0,0);
  }

  goto(name){
    this.currentNavItem = name;
    this._checkAllSteps(name);
  }

  _checkAllSteps(name){
    if(!this.allStepsComplete){
      if(this.checkList.indexOf(name) === -1){
        this.checkList.push(name)
      }
      if(this.checkList.length === 3){
        this.allStepsComplete = true;
        this.connection.saveData(this.allStepsComplete,'physicalComplete');
      }
    }
  }
}

PhysicalController.$inject = ['connection','$timeout','$state'];
export default PhysicalController;
