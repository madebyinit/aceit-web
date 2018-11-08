class VideoPageController {
  constructor($translate, $document, $timeout, $interval, $state, connection, $scope) {
    'ngInject';

    this.$translate = $translate;
    this.$document = $document;
    this.$timeout = $timeout;
    this.$state = $state;
    this.connection = connection;
    this.firstStart = 0;
    this.eventName = '';
    this.$scope = $scope;
    this.CheckChangeScreen = this.CheckChangeScreen.bind(this);
    this.$interval = $interval;
    this.showDialogEnd = true;
  }

  $onInit() {
    const myVideo = this.$document[0].getElementById('video0');
    myVideo.pause();

    if (localStorage.getItem('videoPageFirst')) {    
      this.reloadPagePopup();
    }

    this.connection.saveData('videoPageFirst', 'videoPageFirst');
  }

  reloadPagePopup() {
    this.showDialogEnd = false;
    this.seconds = 45;
    const myVideo = this.$document[0].getElementById('video0');
    myVideo.play();

    this.countdownTimer = this.$interval(() => {
      if (this.seconds === 0) {
        this.$interval.cancel(this.countdownTimer);
        this.$state.go('games');
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  CheckChangeScreen() {
    if (this.firstStart > 0) {
      this.firstStart = -1;
      this.$state.go('games');
    }
    this.firstStart++;
  }


  ClickAfterEndVideo() {
    const myVideo = this.$document[0].getElementById('video0');

    if (myVideo.ended) {
      this.removeAllListeners();
      this.firstStart = -1;
      this.$state.go('games');
    }
  }

  removeAllListeners() {
    this.$document.unbind('scroll');
    this.firstStart = 0;
    this.eventName = '';
    // this.$document.removeEventListener(this.eventName, this.CheckChangeScreen);
  }

  $onDestroy() {
    this.removeAllListeners();
  }
}
module.exports = VideoPageController;
