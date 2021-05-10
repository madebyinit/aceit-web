class selectElementController {
  constructor($timeout, $scope) {
    this.$timeout = $timeout;
    this.$scope = $scope;
  }

  $onInit() {
    this._watchData();
    this.maxRating = 5;
    this.rating = 0;
    this.validateStars(this.rating);
    this.starsArray = this.getStarsArray();
  }

  _watchData() {
    this.watchChange = this.$scope.$watch(
      () => this.answer,
      (newVal) => {
        if (newVal) {
          this.$timeout(() => {
            this.rating = newVal;
            this.starsArray = this.getStarsArray();
            this.validateStars(newVal);
          }, 200);
        }
      }
    );
  }

  getStarsArray() {
    let starsArray = [];
    for (let index = 0; index < this.maxRating; index++) {
      let starItem = {
        index: index,
        class: "star-off",
      };
      starsArray.push(starItem);
    }
    return starsArray;
  }

  setRating(rating) {
    if (this.readOnly) {
      return;
    }
    this.rating = rating;
    this.validateStars(this.rating);
    this.$timeout(() => {
      this.onRating({
        rating: this.rating,
      });
      this.rating = 0;
      this.setMouseOverRating(0);
    }, 200);
  }

  setMouseOverRating(rating) {
    if (this.readOnly) {
      return;
    }
    this.validateStars(rating);
  }

  validateStars(rating) {
    if (!this.starsArray || this.starsArray.length === 0) {
      return;
    }
    for (let index = 0; index < this.starsArray.length; index++) {
      let starItem = this.starsArray[index];
      if (index <= rating - 1) {
        starItem.class = "star-on";
      } else {
        starItem.class = "star-off";
      }
    }
  }
}

selectElementController.$inject = ["$timeout", "$scope"];
export default selectElementController;
