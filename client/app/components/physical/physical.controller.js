import consts from "../routine/directives/consts.js";

class PhysicalController {
  constructor(connection, $timeout, $state, $rootScope) {
    this.connection = connection;
    this.$timeout = $timeout;
    this.$state = $state;
    this.$rootScope = $rootScope;
  }

  $onInit() {
    // this.allStepsComplete = false;
    this.connection.getUserPromise().then(res => {
      if (_.get(res, "questionnaire")) {
        this.user = res;
      }
    });

    this._checkToolComplete();
    this.checkList = [];
    this.goto("breathing");
  }

  goSummary() {
    if (this.allStepsComplete && !this.physicalComplete) {
      this.showToolsDialog = true;
    } else {
      this.$state.go("summary");
      this.$rootScope.isScrollToTools = true;
    }
  }

  _checkToolComplete() {
    this.connection.getUserPromise().then(res => {
      // if(_.get(res,'physicalComplete')){
      this.$timeout(() => {
        this.physicalComplete = _.get(res, "physicalComplete") || false;
        if (!this.physicalComplete) {
          this._setToolsDialog();
        }
        this.allStepsComplete = this.physicalComplete;
      }, 0);
      // }
    });
  }
  _saveToolSelection(tool) {
    this.physicalComplete = true;
    this.allStepsComplete = true;
    this.connection.saveData(this.physicalComplete, "physicalComplete");
    this.connection.saveData(tool, "physicalSelectedTool");
    this.showToolsDialog = false;
    this.$state.go("summary");
    this.$rootScope.isScrollToTools = true;
  }

  _setToolsDialog() {
    let sum = _.cloneDeep(consts.sum);
    _.forEach(_.get(this.user, "questionnaire"), value => {
      sum[value.category] += value.answer;
    });
    this.userSum = sum;
    if (_.get(this.userSum, "concentration") >= 10) {
      this.optionOne = "Breathing";
      this.optionTwo = "Imagery";
      this.optionThree = "Neck & Shoulders";
    } else {
      this.optionOne = "Imagery";
      this.optionTwo = "Neck & Shoulders";
    }
  }

  moveToNextStep(step) {
    if (step === "breathing") {
      this.goto("neck");
    } else if (step === "neck") {
      this.goto("imagery");
    }
    window.scrollTo(0, 0);
  }

  goto(name) {
    this.currentNavItem = name;
    this._checkAllSteps(name);
  }

  _checkAllSteps(name) {
    if (!this.allStepsComplete) {
      if (this.checkList.indexOf(name) === -1) {
        this.checkList.push(name);
      }
      if (this.checkList.length === 3) {
        this.allStepsComplete = true;
      }
    }
  }
}

PhysicalController.$inject = ["connection", "$timeout", "$state", "$rootScope"];
export default PhysicalController;
