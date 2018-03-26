class dialogElementSecondController {
  constructor($timeout,$scope) {
    this.$timeout = $timeout;
    this.$scope = $scope;
  }

  $onInit(){
    this.maxRating = 5;
    this.rating = 0;
    this.validateStars(this.rating);
    this.starsArray = this.getStarsArray();

    this.watchChange = this.$scope.$watch(() => this.showDialog,(newVal) =>{
      if(newVal){
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      }else if(newVal === false){
        document.getElementsByTagName('body')[0].style.overflow = '';
      }
    });
  }

  $onDestroy(){
    document.getElementsByTagName('body')[0].style.overflow = '';
  }

  returnValueFn(){
    this.returnValue();
  }

  returnValueFn2(){
    this.returnValue2();
  }

  returnValueFn3(val){
    this.showWindow = !this.showWindow;
    this.returnValue3({val:val});
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

dialogElementSecondController.$inject = ['$timeout','$scope'];
export default dialogElementSecondController;
