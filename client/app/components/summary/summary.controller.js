const POSITIVE = 'positive';
const CONCENTRATION = 'concentration';
const PHYSICAL = 'physical';

class SummaryController {
  constructor(connection, $state, progressLinear, $timeout, gameSummaryValue) {
    this.connection = connection;
    this.$state = $state;
    this.progressLinear = progressLinear;
    this.$timeout = $timeout;
    this.gameSummaryValue = gameSummaryValue;
  }

  $onInit() {
    if (this.gameSummaryValue.selfAssessment === String) { this.gameSummaryValue.selfAssessment = ''; }

    if (this.gameSummaryValue.gamesSuccessfullyCompleted === String) { this.gameSummaryValue.gamesSuccessfullyCompleted = ''; }

    if (this.gameSummaryValue.slowStarter === String) { this.gameSummaryValue.slowStarter = ''; }

    if (this.gameSummaryValue.impulsivity === String) { this.gameSummaryValue.impulsivity = ''; }

    if (this.gameSummaryValue.panic === String) { this.gameSummaryValue.panic = ''; }

    if (this.gameSummaryValue.negativeThinking === String) { this.gameSummaryValue.negativeThinking = ''; }

    if (this.gameSummaryValue.lowConfidence === String) { this.gameSummaryValue.lowConfidence = ''; }

    if (this.gameSummaryValue.perfectionism === String) { this.gameSummaryValue.perfectionism = ''; }

    if (this.gameSummaryValue.badTimeManagement === String) { this.gameSummaryValue.badTimeManagement = ''; }

    if (this.gameSummaryValue.frustration === String) { this.gameSummaryValue.frustration = ''; }

    if (this.gameSummaryValue.concentration === String) { this.gameSummaryValue.concentration = ''; }

    if (this.gameSummaryValue.muteMusic === String) { this.gameSummaryValue.muteMusic = ''; }

    // this.progressLinear.showProgress();
    this.connection.saveData(true, 'summaryComplete');
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
        // this.routineDisabled();
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

  sumUserQuestionnaire() {
    _.forEach(_.get(this.user, 'questionnaire'), (value) => {
      this.userSum[value.category] += value.answer;
    });
  }
}
SummaryController.$inject = ['connection', '$state', 'progressLinear', '$timeout', 'gameSummaryValue'];
export default SummaryController;
