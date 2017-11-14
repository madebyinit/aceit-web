import SummaryController from '../summary/summary.controller';

class GoaceitController {
    constructor(connection) {
        this.name = 'goaceit';
        this.connection = connection;

        this.open = {
            focus: false,
            biodot: false,
            sleep: false
        };
    }

    $onInit(){
        this.connection.getData().then((res)=>{
            this.user = res;
        });
        this.connection.saveData(true,'goaceitVisited');
    }

    toggleDrawer(drawer) {
        console.log('hey');
        this.open[drawer] = !this.open[drawer];
    }

}

GoaceitController.$inject = ['connection'];
export default GoaceitController;
