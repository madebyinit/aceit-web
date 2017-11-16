import consts from '../consts';

class RoutineDialogController {
  constructor(connection,$timeout) {
    this.connection = connection;
    this.$timeout = $timeout;
      this.hasInput = true;
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
      [consts.CONCENTRATION_PHYSICAL_TYPE]:()=>this._concentrationPhysicalSteps(),
      [consts.POSITIVE_TYPE]:()=>this._positiveSteps()
    };
    cases[this.type]();
  }

  _setStepOne(){
    this.inputTitle = 'Step one';
    this.inputPlaceholder = 'Enter your step 1';
  }

  _setStepTwo(){
    this.inputTitle = 'Step Two';
    this.inputPlaceholder = 'Enter your step 2';
  }

  _powerWord(){
    this.inputTitle = 'Enter power word';
    this.inputPlaceholder = 'Type your power word';
  }

  _positiveSteps(){
    let steps = {
      'one':()=>{
        this._setStepOne();
      },
      'two':()=>{
        this._setStepTwo();
      },
      'three':()=>{
        if(_.get(this.user,'positiveWord')){
          this.inputTitle = 'Add your own positive thought';
          this.inputPlaceholder = 'Type your positive thought';
          this.inputValue = _.get(this.user,'positiveWord');
          this.optionTwo = 'I can do it';
          this.optionThree = 'I`m prepared';
        }else{
          this.inputTitle = 'Add your own positive thought';
          this.inputPlaceholder = 'Type your positive thought';
          this.optionTwo = 'I can do it';
          this.optionThree = 'I`m prepared';
        }
      }
    };
    steps[this.step]();
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
          this._powerWord();
          this.inputValue = _.get(this.user,'concentration');
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
          this.inputTitle = 'Enter Imagery word';
          this.inputPlaceholder = 'Type your imagery word';
          this.inputValue = _.get(this.user,'imagery');
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
          this._powerWord();
          this.inputValue = _.get(this.user,'concentration');
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
    if(this.type === consts.PHYSICAL_TYPE && this.step === 'three'){
      this.connection.saveData(this.inputValue,'imagery');
      if(this.inputValue){
        this.inputValue = `Think of ${this.inputValue}`;
      }else{
        this.inputValue = `Choose from`;
      }
    }else if(this.type === consts.CONCENTRATION_TYPE  && this.step === 'three'){
      this.connection.saveData(this.inputValue,'concentration');
      if(this.inputValue){
        this.inputValue = `Say ${this.inputValue}`;
      }else{
        this.inputValue = `Enter power word`;
      }
    }else if(this.type === consts.POSITIVE_TYPE && this.step === 'three'){
      this.connection.saveData(this.inputValue,'positiveWord');
      if(!this.inputValue){
        this.inputValue = `Choose positive thought`;
      }
    }
    else{
      if(this.step === 'two'){
        this.connection.saveData(this.inputValue,'imagery');
        if(this.inputValue){
          this.inputValue = `Think of ${this.inputValue}`;
        }else{
          this.inputValue = `Choose from`;
        }
      }else if(this.step === 'three'){
        this.connection.saveData(this.inputValue,'concentration');
        if(this.inputValue){
          this.inputValue = `Say ${this.inputValue}`;
        }else{
          this.inputValue = `Enter power word`;
        }
      }
    }
    this.returnData({obj:this.inputValue,step:this.step});
    this.inputValue = '';
    this.closeDialog();
  }
}

RoutineDialogController.$inject = ['connection','$timeout'];
export default RoutineDialogController;
