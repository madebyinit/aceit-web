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
        this.activeMindTabIndex = 0;
        this.audioPlaying = false;
    }
    scrollTo(element, to, duration) {
        let start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
        let easeInOutQuad = function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };
        let animateScroll = function(){
            currentTime += increment;
            let val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
    toggleDrawer(drawer) {
        window.scrollTo(0, 200);
        this.openDrawers[drawer] = !this.openDrawers[drawer];
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
