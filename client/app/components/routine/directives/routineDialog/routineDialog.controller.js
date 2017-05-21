import consts from '../consts';

class RoutineDialogController {
  constructor(connection,$timeout) {
    this.connection = connection;
    this.$timeout = $timeout;
  }

  $onInit(){
    this.connection.getUserPromise().then((res)=>{
      this.$timeout(()=>{
        this.user = res;
        this._setSteps();
      },0);
    });
  }

  _setSteps(){
    let cases = {
      [consts.CONCENTRATION_TYPE]:()=>{

      },
      [consts.PHYSICAL_TYPE]:()=>this._physicalSteps(),
      [consts.CONCENTRATION_PHYSICAL_TYPE]:()=>{
        return 'Lemonade';
      }
    };
    cases[this.type]();
  }

  _physicalSteps(){
    if(this.step === 'one'){
      this.inputTitle = 'Step one text';
      this.inputPlaceholder = 'Enter your step 1';
    }else if(this.step === 'two'){
      this.inputTitle = 'Step Two text';
      this.inputPlaceholder = 'Enter your step 2';
    }else if(this.step === 'three'){
      if(_.get(this.user,'imagery')){
        this.optionOne = `Think of ${_.get(this.user,'imagery')}`;
        this.optionTwo = 'Rotate Neck & Shoulders';
      }else{
        this.inputTitle = 'Enter Imagery word';
        this.inputPlaceholder = 'Type your imagery word';
        this.optionTwo = 'Rotate Neck & Shoulders';
      }
    }
  }

  updateOnClick(value){
    this.returnData({obj:value,step:this.step});
    this.closeDialog();
  }

  updateInput(){
    if(this.type === consts.PHYSICAL_TYPE){
      this.connection.saveData(this.inputValue,'imagery');
    }
    this.returnData({obj:this.inputValue,step:this.step});
    this.closeDialog();
  }
}

RoutineDialogController.$inject = ['connection','$timeout'];
export default RoutineDialogController;
