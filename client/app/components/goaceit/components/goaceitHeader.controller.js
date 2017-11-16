// import SummaryController from '../summary/summary.controller';

class GoaceitHeaderController {
    constructor($rootScope) {
        this.name = 'goaceitHeader';
        this.audiofile = $rootScope.videoCdn + 'sleep.mp3';
        this.audio = new Audio(this.audiofile);
    }

    $onInit(){
        this.openDrawers = {
            focus: false,
            biodot: false,
            sleep: false
        };

        this.activeTabIndex = 0;

        this.audioPlaying = false;
    }

    toggleDrawer(drawer) {
        console.log(this.user);
        this.openDrawers[drawer] = !this.openDrawers[drawer];
    }

    toggleTab() {
        this.activeTabIndex = 1 - this.activeTabIndex;
    }

    toggleAudio() {
        console.log('AUDIO');
        this.audio.paused ? this.audio.play() : this.audio.pause();
        this.audioPlaying = !this.audioPlaying;
    }
}

GoaceitHeaderController.$inject = ['$rootScope'];
export default GoaceitHeaderController;
