class requiredCardsController {
  constructor(connection, $state, progressLinear, $timeout, gameScoreValue, estimationOfResults) {
    this.connection = connection;
    this.$state = $state;
    this.progressLinear = progressLinear;
    this.$timeout = $timeout;
    this.positive = false;
    this.concentration = false;
    this.physical = false;
    this.gameScoreValue = gameScoreValue;
    this.estimationOfResults = estimationOfResults;
  }

  $onInit() {
    if (this.gameScoreValue.summary[4] > this.estimationOfResults.SuggestPoints.Concentration) { this.concentration = true; }
    if (this.gameScoreValue.summary[8] > this.estimationOfResults.SuggestPoints.Frustration) { this.physical = true; }
    if (this.gameScoreValue.summary[0] > this.estimationOfResults.SuggestPoints['Low Confidence']) { this.positive = true; }
    if (this.gameScoreValue.summary[3] > this.estimationOfResults.SuggestPoints['Negative Thinking']) { this.positive = true; }
    if (this.gameScoreValue.summary[7] > this.estimationOfResults.SuggestPoints.Panic) { this.positive = true; }
    
    this._getUserData();
    
  }
  stateGo(name) {
    this.$state.go(name);
  }
  _getUserData() {
    this.connection.getData().then((res) => {
      this.user = res;

      this.userSum = { positive: 0, concentration: 0, physical: 0 };

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

requiredCardsController.$inject = ['connection', '$state', 'progressLinear', '$timeout', 'gameScoreValue', 'estimationOfResults'];
export default requiredCardsController;
