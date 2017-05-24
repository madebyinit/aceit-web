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
    this.userSum = {positive:0,concentration:0,physical:0};
    this.connection.getUserPromise().then((res)=>{
      if(_.get(res,'questionnaire')){
        this.user = res;
        this._sumUserQuestionnaire();
      }
    })
  }

  _sumUserQuestionnaire(){
    _.forEach(_.get(this.user,'questionnaire'),(value)=>{
      this.userSum[value.category] += value.answer;
    });
    this._buildRoutine();
  }

  suggestedRoutine(){
    let defaultSteps = {
      [consts.PHYSICAL_TYPE]:()=>{
        this.$timeout(()=>{
          this.steps = _.cloneDeep(consts.defaultPhysical);
          this._saveSteps();
        },0)
      },
      [consts.CONCENTRATION_TYPE]:()=>{
        this.$timeout(()=>{
          this.steps = _.cloneDeep(consts.defaultConcentration);
          this._saveSteps();
        },0)
      },
      [consts.CONCENTRATION_PHYSICAL_TYPE]:()=>{
        this.$timeout(()=>{
          this.steps = _.cloneDeep(consts.defaultConcentrationPhysical);
          this._saveSteps();
        },0)
      }
    };
    defaultSteps[this.routineType]();
  }

  _buildRoutine(){
    if((_.get(this.userSum,'concentration') + _.get(this.userSum,'physical')) >= 20){
      this._setPhysicalConcentration();
    }else if(_.get(this.userSum,'concentration') >= 10){
      this._setConcentration();
    }else if(_.get(this.userSum,'physical') >= 10){
      this._setPhysical();
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
        this.steps = _.cloneDeep(consts.defaultConcentrationPhysical);
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
        this.steps = consts.concentrationPhysical;
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
        this.steps = _.cloneDeep(consts.defaultPhysical);
      },0);
    }
  }

  saveData(obj,step){
    this.steps[step] = obj;
    this._saveSteps();
  }

  _saveSteps(){
    this.connection.saveData(this.steps,'routine').then(()=>{
      console.log('Routine saved')
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
