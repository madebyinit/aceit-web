import consts from '../consts';


class LionSectionController {
  constructor(connection, $state) {
    this.connection = connection;
    this.consts = consts;
    this.$state = $state;
  }

  aceitVisited() {
    this.connection.getData().then((res) => {
      this.user = res;
      this.connection.saveData(true, 'goaceitVisited');
      this.$state.go('goaceit');
    });
  }
}
LionSectionController.$inject = ['connection', '$state'];
export default LionSectionController;
