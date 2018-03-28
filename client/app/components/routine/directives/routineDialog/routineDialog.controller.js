import consts from '../consts';

class RoutineDialogController {

  constructor(connection,$timeout) {
    this.connection = connection;
    this.$timeout = $timeout;
      this.hasInput = true;
  this.inputTypes = {
      'OVERRIDE_STEP': 1,
      'WORD': 2
  };

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

  _setStepThree(){
    this.inputTitle = 'Step Three';
    this.inputPlaceholder = 'Enter your step 3';
  }

  _powerWord(){
    this.inputTitle2 = 'Enter power word';
    this.inputPlaceholder2 = 'Type your power word';
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
        this._setStepThree();
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
          this._setStepThree();
          
        if(_.get(this.user,'physicalSelectedTool') == 'Imagery'){
          this.inputTitle2 = 'Enter Imagery word';
          this.inputPlaceholder2 = 'Type your imagery word';
          this.inputValue2 = _.get(this.user,'imagery');
          // this.optionTwo = 'Rotate Neck & Shoulders';
        }else{
          // this.inputTitle2 = 'Enter Imagery word';
          // this.inputPlaceholder2 = 'Type your imagery word';
          // this.optionTwo = 'Rotate Neck & Shoulders';
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
          this._setStepThree();
        if(_.get(this.user,'concentration')){
          this._powerWord();
          this.inputValue2 = _.get(this.user,'concentration');
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
          this._setStepTwo();
        if(_.get(this.user,'physicalSelectedTool') == 'Imagery'){
          this.inputTitle2 = 'Enter Imagery word';
          this.inputPlaceholder2 = 'Type your imagery word';
          this.inputValue2 = _.get(this.user,'imagery');
          // this.optionTwo = 'Rotate Neck & Shoulders';
          // this.optionThree = 'Take a deep breath';
        }else{
          // this.inputTitle2 = 'Enter Imagery word';
          // this.inputPlaceholder2 = 'Type your imagery word';
          // this.optionTwo = 'Rotate Neck & Shoulders';
          // this.optionThree = 'Take a deep breath';
        }
      },
      'three':()=>{
          this._setStepThree();
        if(_.get(this.user,'concentration')){
          this._powerWord();
          this.inputValue2 = _.get(this.user,'concentration');
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

  updateInput(inputType){
    if(this.type === consts.PHYSICAL_TYPE && this.step === 'three' && inputType == this.inputTypes.WORD){
      this.connection.saveData(this.inputValue2,'imagery');
      if(this.inputValue2){
        this.inputValue2 = `Think of ${this.inputValue2}`;
      }else{
        // this.inputValue = `Choose from`;
        this.inputValue2 = `Enter imagery word`;
      }
    }else if(this.type === consts.CONCENTRATION_TYPE  && this.step === 'three' && inputType == this.inputTypes.WORD){
      this.connection.saveData(this.inputValue2,'concentration');
      if(this.inputValue2){
        this.inputValue2 = `Say ${this.inputValue2}`;
      }else{
        this.inputValue2 = `Enter power word`;
      }
    }else if(this.type === consts.POSITIVE_TYPE && this.step === 'three' && inputType == this.inputTypes.WORD){
      this.connection.saveData(this.inputValue2,'positiveWord');
      if(!this.inputValue2){
        this.inputValue2 = `Choose positive thought`;
      }
    }
    else{
      if(this.step === 'two' && inputType == this.inputTypes.WORD){
        this.connection.saveData(this.inputValue2,'imagery');
        if(this.inputValue2){
          this.inputValue2 = `Think of ${this.inputValue2}`;
        }else{
        this.inputValue2 = `Enter imagery word`;
        }
      }else if(this.step === 'three' && inputType == this.inputTypes.WORD){
        this.connection.saveData(this.inputValue2,'concentration');
        if(this.inputValue2){
          this.inputValue2 = `Say ${this.inputValue2}`;
        }else{
          this.inputValue2 = `Enter power word`;
        }
      }
    }
    if (inputType == this.inputTypes.OVERRIDE_STEP) {
    this.returnData({obj:this.inputValue,step:this.step});
    this.inputValue = '';
    }
    if (inputType == this.inputTypes.WORD) {
    this.returnData({obj:this.inputValue2,step:this.step});
    this.inputValue2 = '';
    }
    
    
    this.closeDialog();
  }
}

RoutineDialogController.$inject = ['connection','$timeout'];
export default RoutineDialogController;
