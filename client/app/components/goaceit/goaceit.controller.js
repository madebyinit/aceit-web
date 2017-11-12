import SummaryController from '../summary/summary.controller';

class GoaceitController { 
  constructor(connection) {
    this.name = 'goaceit';
  }
  $onInit(){
    // this.connection.saveData(true,'goaceitVisited');
  }

}

GoaceitController.$inject = ['connection'];
export default GoaceitController;
