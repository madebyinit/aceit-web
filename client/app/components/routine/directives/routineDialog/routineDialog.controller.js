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
      [consts.CONCENTRATION_TYPE]:()=>this._concentrationSteps(),
      [consts.PHYSICAL_TYPE]:()=>this._physicalSteps(),
      [consts.CONCENTRATION_PHYSICAL_TYPE]:()=>this._concentrationPhysicalSteps()
    };
    cases[this.type]();
  }

  _setStepOne(){
    this.inputTitle = 'Step one text';
    this.inputPlaceholder = 'Enter your step 1';
  }

  _setStepTwo(){
    this.inputTitle = 'Step Two text';
    this.inputPlaceholder = 'Enter your step 2';
  }

  _powerWord(){
    this.inputTitle = 'Enter power word';
    this.inputPlaceholder = 'Type your power word';
  }

  _physicalSteps(){
    let steps = {
      'one':()=>{
        this._setStepOne();
      },
      'two':()=>{
        this._setStepTwo();
      },
      'three':()=>{
        if(_.get(this.user,'imagery')){
          this.inputTitle = 'Enter Imagery word';
          this.inputPlaceholder = 'Type your imagery word';
          this.inputValue = _.get(this.user,'imagery');
          this.optionTwo = 'Rotate Neck & Shoulders';
        }else{
          this.inputTitle = 'Enter Imagery word';
          this.inputPlaceholder = 'Type your imagery word';
          this.optionTwo = 'Rotate Neck & Shoulders';
        }
      }
    };
    steps[this.step]();
  }

  _concentrationSteps(){
    let steps = {
      'one':()=>{
        this._setStepOne();
      },
      'two':()=>{
        this._setStepTwo();
      },
      'three':()=>{
        if(_.get(this.user,'concentration')){
          this.optionOne = `Say ${_.get(this.user,'concentration')}`;
        }else{
          this._powerWord();
        }
      }
    };
    steps[this.step]();
  }

  _concentrationPhysicalSteps(){
    let steps = {
      'one':()=>{
        this._setStepOne();
      },
      'two':()=>{
        if(_.get(this.user,'imagery')){
          this.optionOne = `Think of ${_.get(this.user,'imagery')}`;
          this.optionTwo = 'Rotate Neck & Shoulders';
          this.optionThree = 'Take a deep breath';
        }else{
          this.inputTitle = 'Enter Imagery word';
          this.inputPlaceholder = 'Type your imagery word';
          this.optionTwo = 'Rotate Neck & Shoulders';
          this.optionThree = 'Take a deep breath';
        }
      },
      'three':()=>{
        if(_.get(this.user,'concentration')){
          this.optionOne = `Say ${_.get(this.user,'concentration')}`;
        }else{
          this._powerWord();
        }
      }
    };
    steps[this.step]();
  }

  updateOnClick(value){
    this.returnData({obj:value,step:this.step});
    this.closeDialog();
  }

  updateInput(){
    if(this.type === consts.PHYSICAL_TYPE){
      this.connection.saveData(this.inputValue,'imagery');
      this.inputValue = `Think of ${this.inputValue}`;
    }else if(this.type === consts.CONCENTRATION_TYPE){
      this.connection.saveData(this.inputValue,'concentration');
    }
    this.returnData({obj:this.inputValue,step:this.step});
    this.closeDialog();
  }
}

RoutineDialogController.$inject = ['connection','$timeout'];
export default RoutineDialogController;
