import consts from '../consts';

class ControlController {
  constructor(connection,$timeout) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.consts = consts;
  }

  $onInit(){
    this.routineType = '';
    this.steps = {};
    this.userSum = _.cloneDeep(consts.sum);
    this._getUsersData();
  }

  _getUsersData(){
    this.connection.getUserPromise().then((res)=>{
      if(_.get(res,'questionnaire')){
        this.user = res;
        this._sumUserQuestionnaire();
      }
    })
  }

  _sumUserQuestionnaire(){
    let sum = _.cloneDeep(consts.sum);
    _.forEach(_.get(this.user,'questionnaire'),(value)=>{
      sum[value.category] += value.answer;
    });
    this.userSum = sum;
    this._buildRoutine();
  }

  _physicalBind(){
    if(_.get(this.user,'imagery')) {
      this.steps = _.cloneDeep(consts.defaultPhysical);
    }
  }

  _concentrationBind(){
    if(_.get(this.user,'concentration')){
      this.steps = _.cloneDeep(consts.defaultConcentration);
      this.steps.three = `Say ${_.get(this.user,'concentration')}`;
    }else{
      this.steps = _.cloneDeep(consts.defaultConcentration);
    }
  }

  _concentrationPhysicalBind(){
    if(_.get(this.user,'concentration') || _.get(this.user,'imagery')){
      this.steps = _.cloneDeep(consts.defaultConcentrationPhysical);
      if(_.get(this.user,'concentration')){
        this.steps.three = `Say ${_.get(this.user,'concentration')}`;
      }
    }else{
      this.steps = _.cloneDeep(consts.defaultConcentrationPhysical);
    }
  }

  _positiveBind(){
    if(_.get(this.user,'positiveWord')){
      this.steps = _.cloneDeep(consts.defaultPositive);
      this.steps.three = _.get(this.user,'positiveWord');
    }else{
      this.steps = _.cloneDeep(consts.defaultPositive);
    }
  }

  suggestedRoutine(){
    let defaultSteps = {
      [consts.PHYSICAL_TYPE]:()=>{
        this.$timeout(()=>{
          this._physicalBind();
          this._saveSteps();
        },0)
      },
      [consts.CONCENTRATION_TYPE]:()=>{
        this.$timeout(()=>{
          this._concentrationBind();
          this._saveSteps();
        },0)
      },
      [consts.CONCENTRATION_PHYSICAL_TYPE]:()=>{
        this.$timeout(()=>{
          this._concentrationPhysicalBind();
          this._saveSteps();
        },0)
      },
      [consts.POSITIVE_TYPE]:()=>{
        this.$timeout(()=>{
          this._positiveBind();
          this._saveSteps();
        },0)
      }
    };
    defaultSteps[this.routineType]();
  }

  _buildRoutine(){
    if(_.get(this.userSum,'concentration') >= 10 && _.get(this.userSum,'physical') >= 10){
      this._setPhysicalConcentration();
    }else if(_.get(this.userSum,'concentration') >= 10){
      this._setConcentration();
    }else if(_.get(this.userSum,'physical') >= 10){
      this._setPhysical();
    }else if(_.get(this.userSum,'positive') >= 10){
      this._setPositive();
    }
    else{
      this._setConcentration();
    }
  }

  _setPhysicalConcentration(){
    this.routineType = consts.CONCENTRATION_PHYSICAL_TYPE;
    if(_.get(this.user,'routine')){
      this.$timeout(()=>{
        this.steps = _.get(this.user,'routine');
      },0);
    }else{
      this.$timeout(()=>{
        this._concentrationPhysicalBind();
      },0);
    }
  }

  _setConcentration(){
    this.routineType = consts.CONCENTRATION_TYPE;
    if(_.get(this.user,'routine')){
      this.$timeout(()=>{
        this.steps = _.get(this.user,'routine');
      },0);
    }else{
      this.$timeout(()=>{
        this._concentrationBind();
      },0);
    }
  }

  _setPhysical(){
    this.routineType = consts.PHYSICAL_TYPE;
    if(_.get(this.user,'routine')){
      this.$timeout(()=>{
        this.steps = _.get(this.user,'routine');
      },0);
    }else{
      this.$timeout(()=>{
        this._physicalBind();
      },0);
    }
  }

  _setPositive(){
    this.routineType = consts.POSITIVE_TYPE;
    if(_.get(this.user,'routine')){
      this.$timeout(()=>{
        this.steps = _.get(this.user,'routine');
      },0);
    }else{
      this.$timeout(()=>{
        this._positiveBind();
      },0);
    }
  }

  saveData(obj,step){
    this.steps[step] = obj;
    this._saveSteps();
  }

  _saveSteps(){
    this.connection.saveData(this.steps,'routine').then(()=>{
      this._getUsersData();
    })
  }

  closeDialog(){
    this.openDialog = false;
  }

  editStep(step){
    this.openDialog = true;
    this.stepSelect = step;
  }
}

ControlController.$inject = ['connection','$timeout'];
export default ControlController;
