import SummaryController from '../summary/summary.controller';

class GoaceitController {
  constructor(connection) {
    this.name = 'goaceit';
    this.connection = connection;
  }

  $onInit() {
    this.connection.getData().then((res) => {
      this.user = res;
      this.connection.saveData(true, 'goaceitVisited');
      // this.user.goaceitVisited = false;
    });
  }
}

GoaceitController.$inject = ['connection'];
export default GoaceitController;
