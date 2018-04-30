class requiredCardsController {
  constructor(connection, $state, progressLinear, $timeout) {
    this.connection = connection;
    this.$state = $state;
    this.progressLinear = progressLinear;
    this.$timeout = $timeout;
    this.positive = false;
    this.concentration = false;
    this.physical = false;
  }

  $onInit() {
    this._getUserData();
  }
  stateGo(name) {
    this.$state.go(name);
  }
  _getUserData() {
    this.connection.getData().then((res) => {
      this.user = res;
      this.userSum = { positive: 0, concentration: 0, physical: 0 };

      if (res.userSum.panic > this.user.estimationOfResults.SuggestPoints.Panic || res.userSum.negThink > this.user.estimationOfResults.SuggestPoints['Negative Thinking'] || res.userSum.lowConfidence > this.user.estimationOfResults.SuggestPoints['Low Confidence']) {
        this.positive = true;
      }

      if (res.userSum.lackRicuz > this.user.estimationOfResults.SuggestPoints.Concentration) {
        this.concentration = true;
      }

      if (res.userSum.frustration > this.user.estimationOfResults.SuggestPoints.Frustration) {
        this.physical = true;
      }

      console.log(this.userSum);
      if (_.get(res, 'questionnaire')) {
        this.sumUserQuestionnaire();
        this.routineDisabled();
      } else {
        this.$state.go('questionnaire');
      }
      if (this.progressLinear) {
        this.progressLinear.hideProgress();
      }
    }, (error) => {
      console.log(error);
      if (this.progressLinear) {
        this.progressLinear.hideProgress();
      }
    });
  }

  routineDisabled() {
    const that = this;
    this.enableRoutineButton = true;
    _.forEach(this.userSum, (value, key) => {
      if (value >= 10 && !_.get(that.user, `${key}Complete`)) {
        this.$timeout(() => {
          this.enableRoutineButton = false;
        }, 0);
      }
    });
  }

  sumUserQuestionnaire() {
    _.forEach(_.get(this.user, 'questionnaire'), (value) => {
      this.userSum[value.category] += value.answer;
    });
  }


  // $onDestroy(){
  //   this.watchChange();
  // }
}

requiredCardsController.$inject = ['connection', '$state', 'progressLinear', '$timeout'];
export default requiredCardsController;
