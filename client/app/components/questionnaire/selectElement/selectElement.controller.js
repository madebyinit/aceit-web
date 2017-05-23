class selectElementController {
  constructor($timeout,$scope) {
    this.$timeout = $timeout;
    this.$scope = $scope;
  }

  $onInit(){
    this._watchData();
    this.maxRating = 5;
    if (this.readOnly === undefined) {
      this.readOnly = false;
    }
    this.starsArray = this.getStarsArray();
    this.validateStars(this.rating);
  }

  _watchData(){
    this.watchChange = this.$scope.$watch(() => this.answer,(newVal) =>{
      if(newVal){
        this.rating = newVal;
        this.validateStars(newVal);
      }
    });
  }

  getStarsArray() {
    let starsArray = [];
      for (let index = 0; index < this.maxRating; index++) {
        let starItem = {
          index: index,
          class: 'star-off'
        };
        starsArray.push(starItem);
      }
      return starsArray;
    };

  setRating(rating) {
    if (this.readOnly) {
      return;
    }
    this.rating = rating;
    this.validateStars(this.rating);
    this.$timeout(()=> {
      this.onRating({
        rating: this.rating
      });
    });
  };

  setMouseOverRating(rating) {
    if (this.readOnly) {
      return;
    }
    this.validateStars(rating);
  };

  validateStars(rating) {
    if (!this.starsArray || this.starsArray.length === 0) {
      return;
    }
    for (let index = 0; index < this.starsArray.length; index++) {
      let starItem = this.starsArray[index];
      if (index <= (rating - 1)) {
        starItem.class = 'star-on';
      } else {
        starItem.class = 'star-off';
      }
    }
  };
}

selectElementController.$inject = ['$timeout','$scope'];
export default selectElementController;
