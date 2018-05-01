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
  }

  $onInit() {
    this.seconds = 45;
    const myVideo = this.$document[0].getElementById('video0');
    myVideo.play();
    switch (true) {
      case !!myVideo.requestFullscreen:
        this.eventName = 'fullscreenchange';
        myVideo.requestFullscreen();
        break;

      case !!myVideo.mozRequestFullScreen:
        this.eventName = 'mozfullscreenchange';
        myVideo.mozRequestFullScreen();
        break;

      case !!myVideo.webkitRequestFullscreen:
        this.eventName = 'webkitfullscreenchange';
        myVideo.webkitRequestFullscreen();
        break;
      default:
        this.eventName = 'webkitfullscreenchange';
        myVideo.webkitRequestFullscreen();
        break;
    }

    function startVideoTimer() {
      if (this.seconds === 0) {
        this.$interval.cancel(this.countdownTimer);
        this.$state.go('games');
      } else {
        this.seconds--;
      }
    }

    this.countdownTimer = this.$interval(startVideoTimer.bind(this), 1000);
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
    this.$document.removeEventListener(this.eventName, this.CheckChangeScreen);
  }

  $onDestroy() {
    this.removeAllListeners();
  }
}
module.exports = VideoPageController;
