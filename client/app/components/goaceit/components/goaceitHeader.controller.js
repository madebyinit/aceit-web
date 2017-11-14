
// import SummaryController from '../summary/summary.controller';

class GoaceitHeaderController {
    constructor(connection) {
        this.name = 'goaceitHeader';
        // this.connection = connection;

    }

    $onInit(){
        this.openDrawers = {
            focus: false,
            biodot: false,
            sleep: false
        };

    }

    toggleDrawer(drawer) {
        console.log(drawer);
        this.openDrawers[drawer] = !this.openDrawers[drawer];
    }

}

GoaceitHeaderController.$inject = ['connection'];
export default GoaceitHeaderController;
