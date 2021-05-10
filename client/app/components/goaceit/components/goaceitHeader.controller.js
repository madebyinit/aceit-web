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
            sleep: false,
            mind: false,
        };
        this.activeTabIndex = 0;
        this.activeMindTabIndex = 0;
        this.audioPlaying = false;
    }

    scrollTo(drawer) {
        setTimeout(function() {
            const element = document.getElementById(drawer);
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scroll({
            top: y - 100,
            behavior: 'smooth'
            });
        }, 300, drawer);
    }
   
    toggleDrawer(drawer) {
        const alreadyOpen = this.openDrawers[drawer];
        this.openDrawers[drawer] = !this.openDrawers[drawer];
        if (!alreadyOpen) {
            this.scrollTo(drawer);
        }
    }
    toggleTab() {
        this.activeTabIndex = 1 - this.activeTabIndex;
    }
    chooseMindTab(t) {
        this.activeMindTabIndex = t;
    }
    toggleAudio() {
        this.audio.paused ? this.audio.play() : this.audio.pause();
        this.audioPlaying = !this.audioPlaying;
    }
}
GoaceitHeaderController.$inject = ['$rootScope'];
export default GoaceitHeaderController;
