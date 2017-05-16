class RoutineController {
  constructor(connection) {
    this.name = 'routine';
    this.connection = connection;
  }

  $onInit(){
    this._saveStateComplete();
  }

  _saveStateComplete(){
    this.connection.saveData(true,'routineComplete');
  }
}

RoutineController.$inject = ['connection'];
export default RoutineController;
